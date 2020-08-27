"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(name, body) {
        this._name = name;
        this._body = body;
    }
    get name() {
        return this._name;
    }
    get body() {
        return this._body;
    }
}
exports.Notification = Notification;
