export type NotificationType = 'error' | 'info' | 'success';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
}
