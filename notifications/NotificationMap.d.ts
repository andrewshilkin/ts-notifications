import { IRecipient } from "./IRecipient";
import { Notification } from "./Notification";
export declare class NotificationMap {
    private _recipientsList;
    constructor();
    private registerRecipient;
    private getRecipients;
    register(recipient: IRecipient): void;
    unregister(recipient: IRecipient): void;
    notify(notification: Notification): void;
}
