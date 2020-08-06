import { IRecipient } from "./IRecipient";
import { Notification } from "./Notification";

/**
 * NotificationMap register recipient to receive interested notification and notify recipients
 */
export class NotificationMap {
    private _recipientsList: { [key: string]: Array<IRecipient>; };

    constructor() {
        this._recipientsList = {};
    }
    private registerRecipient(notificationName: string, recipient: IRecipient): void {
        if (notificationName in this._recipientsList) {
            let recipients = this.getRecipients(notificationName);
            recipients.push(recipient)
        } else {
            this._recipientsList[notificationName] = [];
            this._recipientsList[notificationName][0] = recipient
        }
    }
    private getRecipients(notificationName: string): Array<IRecipient> {
        return this._recipientsList[notificationName]
    }
    public register(recipient: IRecipient): void {
        let interests: Array<string> = recipient.getInterests();
        for (let i = 0; i < interests.length; i++)
            this.registerRecipient(interests[i], recipient)
    }
    public unregister(recipient: IRecipient): void {
        let interests: Array<string> = recipient.getInterests();
        for (let i = 0; i < interests.length; i++) {
            let recipients = this.getRecipients(interests[i]);
            recipients.splice(recipients.indexOf(recipient), 1)
        }
    }
    public notify(notification: Notification): void {
        let recipients: Array<IRecipient> = this.getRecipients(notification.name);
        if (recipients) {
            recipients = recipients.concat();
            for (let i = 0; i < recipients.length; i++)
                if (recipients[i].shouldReceiveNotifications)
                    recipients[i].handleNotification(notification)
        }
    }
}
