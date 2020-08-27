import { Notification } from './Notification';

/**
 * Interface for recipients to listen and send events
 */
export interface IRecipient {
  shouldReceiveNotifications: boolean;
  handleNotification(notification: Notification): void;
  getInterests(): string[];
  sendNotification(type: string, body?: any): void;
}
