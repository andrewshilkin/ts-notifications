"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notify = require("../index");
class NotificationMap extends Notify.NotificationMap {
}
class Recipient {
    constructor(notificationMap) {
        this.shouldReceiveNotifications = true;
        this.notificationMap = notificationMap;
    }
    handleNotification(notification) {
        console.log(`incomming ${notification.name}`);
    }
    getInterests() {
        return [
            "TEST_EVENT",
        ];
    }
    sendNotification(type, body) {
        this.notificationMap.notify(new Notify.Notification(type, body));
    }
}
const notificationMap = new NotificationMap();
const recipient = new Recipient(notificationMap);
notificationMap.register(recipient);
recipient.sendNotification("TEST_EVENT");
recipient.sendNotification("NOT_INTEREST_EVENT");
