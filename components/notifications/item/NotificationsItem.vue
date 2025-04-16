<script setup lang="ts">
import type { Notification } from '~/types';

const props = defineProps<{
  notification: Notification;
}>();

const TTL = 3000;
const notificationsStore = useNotificationsStore();

const isVisible = ref(true);
const timeoutId = ref<number | null>(null);

function handleDestroy() {
  notificationsStore.destroyNotification(props.notification.id);
}

onMounted(() => {
  timeoutId.value = setTimeout(() => {
    isVisible.value = false;
    timeoutId.value = null;
  }, TTL);
});

onBeforeUnmount(() => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
  }
});

const variantClasses = {
  info: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700',
  error:
    'bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-100 dark:border-red-700',
  success:
    'bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-100 dark:border-green-700',
};
</script>

<template>
  <transition name="fade-slide" appear @after-leave="handleDestroy">
    <div
      v-if="isVisible"
      class="w-80 px-4 py-3 rounded-xl shadow-lg border text-sm animate-slide-up-fade"
      :class="variantClasses[notification.type]"
    >
      {{ notification.message }}
    </div>
  </transition>
</template>
