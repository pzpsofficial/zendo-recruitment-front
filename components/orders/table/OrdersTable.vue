<script setup lang="ts">
const ordersStore = useOrdersStore();
const orders = computed(() => ordersStore.activePage);
</script>

<template>
  <div class="rounded-xl border border-border dark:border-border-dark overflow-hidden">
    <table class="min-w-full divide-y divide-border dark:divide-border-dark">
      <thead>
        <tr class="z-10 bg-gray-100 dark:bg-gray-800 shadow-sm">
          <th class="px-4 py-3 text-left text-sm text-text-muted dark:text-text-dark">Order ID</th>
          <th class="px-4 py-3 text-left text-sm">Client (date)</th>
          <th class="px-4 py-3 text-left text-sm">Total</th>
          <th class="px-4 py-3 text-left text-sm">Status</th>
          <th class="px-4 py-3 text-right text-sm">Actions</th>
        </tr>
      </thead>

      <tbody
        class="bg-surface dark:bg-surface-dark text-sm text-text dark:text-text-dark divide-y divide-border dark:divide-border-dark"
      >
        <template v-if="!ordersStore.pending && orders.length">
          <OrdersTableRow v-for="order in orders" :key="order.id" :order="order" />
        </template>

        <template v-else-if="!ordersStore.pending && !orders.length">
          <OrdersNoResults />
        </template>

        <template v-else>
          <OrdersTableLoader />
        </template>
      </tbody>
    </table>
  </div>
</template>
