import { useAPI } from '~/composables';
import { apiDto } from '~/lib';
import type { ListResourceResponse, ApiOrder, Order, ListResourceMeta } from '~/types';

export const useOrdersStore = defineStore('orders', () => {
  const notificationsStore = useNotificationsStore();
  const { $api } = useNuxtApp();
  const { page } = usePage();
  const { search } = useFilters();
  const pending = ref(false);
  const ordersNormalized = ref<Record<number, Record<number, Order>>>({});
  const meta = ref<ListResourceMeta>();

  const { execute, data, error } = useAPI<ListResourceResponse<ApiOrder>>(
    () => `/api/orders?page=${page.value}&search=${search.value}`,
    {
      lazy: true,
      immediate: false,
      watch: false,
    }
  );

  async function fetchOrders() {
    pending.value = true;

    try {
      await execute();

      if (!data.value || error.value) {
        return;
      }

      meta.value = data.value.meta;
      saveNormalizedOrders(data.value);
    } catch {
      notificationsStore.createNotification('error', 'Error has occured');
    } finally {
      pending.value = false;
    }
  }

  async function updateOrder() {
    try {
      notificationsStore.createNotification(
        'info',
        'The order is being updated as a background job.'
      );

      await $api('/orders/simulate-update', {
        method: 'POST',
      });
    } catch {
      notificationsStore.createNotification('error', 'Error has occured');
    }
  }

  function saveNormalizedOrders({ data }: ListResourceResponse<ApiOrder>) {
    if (!data.length) {
      ordersNormalized.value = {};
      return;
    }

    ordersNormalized.value[page.value] = {};
    data.forEach((apiItem) => {
      ordersNormalized.value[page.value][apiItem.id] = apiDto<ApiOrder, Order>(apiItem);
    });
  }

  const activePage = computed(() =>
    meta.value && ordersNormalized.value[meta.value.current_page]
      ? Object.values(ordersNormalized.value[meta.value.current_page])
      : []
  );

  return {
    activePage,
    ordersNormalized,
    pending,
    fetchOrders,
    updateOrder,
    meta,
  };
});
