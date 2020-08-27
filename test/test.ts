import * as Notify from "../index"
import { IRecipient } from "../notifications";

class NotificationMap extends Notify.NotificationMap {

}

class Recipient implements Notify.IRecipient {
    shouldReceiveNotifications: boolean = true;
    notificationMap: Notify.NotificationMap;
    callback: Function;
    constructor(notificationMap: Notify.NotificationMap, cb: Function) {
        this.callback = cb;
        this.notificationMap = notificationMap;
    }
    handleNotification(notification: Notify.Notification): void {
        if(this.callback)
            this.callback(`incomming ${notification.name}`);
    }
    getInterests(): string[] {
        return [
            "TEST_EVENT",
        ]
    }
    sendNotification(type: string, body?: any): void {
        this.notificationMap.notify(new Notify.Notification(type, body));
    }
}



test('My Test', () => {
    const callback = (result: string) => {
        expect(result).toBe(`incomming TEST_EVENT`)
    };
    const notificationMap: NotificationMap = new NotificationMap(); // create notification map
    const recipient: Recipient = new Recipient(notificationMap, callback); // create recipient
    notificationMap.register(recipient); // register recipient

    recipient.sendNotification("TEST_EVENT"); // send notification to map, that we will get as interest event at recipients
    recipient.sendNotification("NOT_INTEREST_EVENT"); // send event with not listen for test
  });