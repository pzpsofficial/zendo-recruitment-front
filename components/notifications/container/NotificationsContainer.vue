<script setup lang="ts">
const notificationsStore = useNotificationsStore();
const notifications = computed(() => notificationsStore.notifications);
</script>

<template>
  <div class="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
    <NotificationsItem
      v-for="notification in notifications"
      :key="notification.id"
      v-bind="{ notification }"
    />
  </div>
</template>
