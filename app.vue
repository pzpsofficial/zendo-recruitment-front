<script lang="ts" setup>
import type { ApiOrder } from './types';

const ordersStore = useOrdersStore();
const notificationsStore = useNotificationsStore();

const { init: initOrdersChannel, destroy: destroyOrdersChannel } = useOrdersChannel({
  'order-status-changed': async ({ order }: { order: ApiOrder }) => {
    notificationsStore.createNotification('success', `Updated order: ${order.order_number}`);
    await ordersStore.fetchOrders();
  },
});

onMounted(() => {
  initOrdersChannel();
});

onBeforeUnmount(() => {
  destroyOrdersChannel();
});
</script>

<template>
  <div class="min-h-screen bg-surface text-text dark:bg-surface-dark dark:text-text-dark">
    <ClientOnly>
      <BaseThemeToggle />
    </ClientOnly>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
