<script setup lang="ts">
import dayjs from 'dayjs';
import { BASE_DATE_FORMAT } from '~/constants';
import type { Order } from '~/types';

const props = defineProps<{
  order: Order;
}>();

const ordersStore = useOrdersStore();

const dateFormatted = computed(() => dayjs(props.order.createdAt).format(BASE_DATE_FORMAT));
</script>

<template>
  <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
    <td class="px-4 py-3 w-1/6 text-sm font-medium">#{{ order.orderNumber }}</td>

    <td class="px-4 py-3 w-2/6 text-sm">
      {{ order.customerName }}
      <span class="block text-xs text-text-muted dark:text-gray-400"> ({{ dateFormatted }}) </span>
    </td>

    <td class="px-4 py-3 w-1/6 text-sm font-medium">{{ order.totalAmount }} zł</td>

    <td class="px-4 py-3 w-1/6">
      <OrderStatus :status="order.status" />
    </td>

    <td class="px-4 py-3 w-1/6 text-right">
      <button
        class="px-4 py-2 rounded-xl text-sm font-semibold shadow-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
        @click="ordersStore.updateOrder"
      >
        Update order
      </button>
    </td>
  </tr>
</template>
