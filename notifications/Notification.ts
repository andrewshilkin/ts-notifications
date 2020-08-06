/**
 * Notification dispatched object
 */
export class Notification {
    private _name: string;
    private _body: any;
    constructor(name: string, body?: any) {
        this._name = name;
        this._body = body
    }
    get name(): string {
        return this._name
    }
    get body(): any {
        return this._body
    }
}
