import { IRecipient } from './IRecipient';
import { Notification } from './Notification';

/**
 * NotificationMap register recipient to receive interested notification and notify recipients
 */
export class NotificationMap {
  private _recipientsList: { [key: string]: IRecipient[] };

  constructor() {
    this._recipientsList = {};
  }
  private registerRecipient(notificationName: string, recipient: IRecipient): void {
    if (notificationName in this._recipientsList) {
      const recipients = this.getRecipients(notificationName);
      recipients.push(recipient);
    } else {
      this._recipientsList[notificationName] = [];
      this._recipientsList[notificationName][0] = recipient;
    }
  }
  private getRecipients(notificationName: string): IRecipient[] {
    return this._recipientsList[notificationName];
  }
  public register(recipient: IRecipient): void {
    const interests: string[] = recipient.getInterests();
    for (const key in interests) this.registerRecipient(interests[key], recipient);
  }
  public unregister(recipient: IRecipient): void {
    const interests: string[] = recipient.getInterests();
    for (const interest of interests) {
      const recipients = this.getRecipients(interest);
      recipients.splice(recipients.indexOf(recipient), 1);
    }
  }
  public notify(notification: Notification): void {
    let recipients: IRecipient[] = this.getRecipients(notification.name);
    if (recipients) {
      recipients = recipients.concat();
      for (const key in recipients)
        if (recipients[key].shouldReceiveNotifications) recipients[key].handleNotification(notification);
    }
  }
}
