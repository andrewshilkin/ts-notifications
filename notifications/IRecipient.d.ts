import { Notification } from "./Notification";
export interface IRecipient {
    shouldReceiveNotifications: boolean;
    handleNotification(notification: Notification): void;
    getInterests(): Array<string>;
    sendNotification(type: string, body?: any): void;
}
