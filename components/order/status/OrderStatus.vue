<script setup lang="ts">
import type { OrderStatus } from '~/types';

defineProps<{
  status: OrderStatus;
}>();

const statusColor = {
  pending: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  canceled: 'bg-red-100 text-red-800',
};
</script>

<template>
  <span
    class="text-xs font-semibold px-3 py-1 rounded-full capitalize"
    :class="statusColor[status] || 'bg-gray-100 text-gray-800'"
  >
    {{ status }}
  </span>
</template>
