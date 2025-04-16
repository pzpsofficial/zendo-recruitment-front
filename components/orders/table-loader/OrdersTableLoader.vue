<template>
  <tr
    v-for="i in 10"
    :key="i"
    class="animate-pulse transition-colors bg-surface dark:bg-surface-dark"
  >
    <td class="px-4 py-3 w-1/6">
      <div class="h-4 bg-border dark:bg-border-dark rounded w-3/4" />
    </td>

    <td class="px-4 py-3 w-2/6">
      <div class="h-4 bg-border dark:bg-border-dark rounded w-5/6 mb-1" />
      <div class="h-3 bg-border dark:bg-border-dark rounded w-1/2" />
    </td>

    <td class="px-4 py-3 w-1/6">
      <div class="h-4 bg-border dark:bg-border-dark rounded w-2/3" />
    </td>

    <td class="px-4 py-3 w-1/6">
      <div class="h-4 bg-border dark:bg-border-dark rounded w-3/5" />
    </td>

    <td class="px-4 py-3 w-1/6">
      <div class="h-[36px] bg-border dark:bg-border-dark rounded w-full" />
    </td>
  </tr>
</template>
