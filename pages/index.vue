<script setup lang="ts">
const ordersStore = useOrdersStore();
const { page } = usePage();
const { search } = useFilters();

const debouncedFunction = useDebounceFn(async () => {
  await ordersStore.fetchOrders();
}, 250);

watch(page, async () => {
  await ordersStore.fetchOrders();
});

watch(search, async () => {
  await debouncedFunction();
});

await callOnce(async () => await ordersStore.fetchOrders());
</script>

<template>
  <div class="min-h-screen bg-surface text-text dark:bg-surface-dark dark:text-text-dark">
    <div class="max-w-6xl mx-auto px-4 py-6 h-dvh flex flex-col space-y-6">
      <OrdersSearch />

      <div class="flex-1 overflow-y-auto">
        <OrdersTable />
      </div>

      <BasePagination v-if="ordersStore.meta" :meta="ordersStore.meta" />
    </div>
  </div>
</template>
