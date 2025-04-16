<script setup lang="ts">
const { search } = useFilters();
</script>

<template>
  <div
    class="bg-surface border border-border rounded-xl shadow-sm px-6 py-4 dark:bg-surface-dark dark:border-border-dark"
  >
    <BaseInput
      v-model="search"
      type="text"
      label="Search by order ID"
      name="search"
      class="w-full"
    />
  </div>
</template>
