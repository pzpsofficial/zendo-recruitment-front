<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import type { ListResourceMeta } from '~/types';

defineProps<{
  meta: ListResourceMeta;
}>();

const route = useRoute();
const { isActive } = usePage();

function getLink(page: number): RouteLocationRaw {
  return {
    ...route,
    query: {
      ...route.query,
      page,
    },
  };
}
</script>

<template>
  <div class="mt-8 px-4 flex justify-center gap-2">
    <NuxtLink
      v-for="page in meta.last_page"
      :key="page"
      :to="getLink(page)"
      class="min-w-[36px] text-center px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 border"
      :class="
        isActive(page)
          ? 'bg-gray-900 text-white border-gray-900 shadow-md font-semibold scale-[1.05]'
          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
      "
    >
      {{ page }}
    </NuxtLink>
  </div>
</template>
