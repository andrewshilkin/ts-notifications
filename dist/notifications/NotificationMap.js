"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMap = void 0;
class NotificationMap {
    constructor() {
        this._recipientsList = {};
    }
    registerRecipient(notificationName, recipient) {
        if (notificationName in this._recipientsList) {
            let recipients = this.getRecipients(notificationName);
            recipients.push(recipient);
        }
        else {
            this._recipientsList[notificationName] = [];
            this._recipientsList[notificationName][0] = recipient;
        }
    }
    getRecipients(notificationName) {
        return this._recipientsList[notificationName];
    }
    register(recipient) {
        let interests = recipient.getInterests();
        for (let i = 0; i < interests.length; i++)
            this.registerRecipient(interests[i], recipient);
    }
    unregister(recipient) {
        let interests = recipient.getInterests();
        for (let i = 0; i < interests.length; i++) {
            let recipients = this.getRecipients(interests[i]);
            recipients.splice(recipients.indexOf(recipient), 1);
        }
    }
    notify(notification) {
        let recipients = this.getRecipients(notification.name);
        if (recipients) {
            recipients = recipients.concat();
            for (let i = 0; i < recipients.length; i++)
                if (recipients[i].shouldReceiveNotifications)
                    recipients[i].handleNotification(notification);
        }
    }
}
exports.NotificationMap = NotificationMap;
