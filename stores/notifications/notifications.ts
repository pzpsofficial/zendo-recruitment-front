import { v4 as uuidv4 } from 'uuid';
import type { NotificationType, Notification } from '~/types';

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<Notification[]>([]);

  function createNotification(type: NotificationType, message: string) {
    notifications.value = [
      ...notifications.value,
      {
        id: uuidv4(),
        message,
        type,
      },
    ];
  }

  function destroyNotification(id: string) {
    notifications.value = notifications.value.filter((item) => item.id !== id);
  }

  return {
    notifications,
    createNotification,
    destroyNotification,
  };
});
