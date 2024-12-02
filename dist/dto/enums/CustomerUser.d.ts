import { User } from "../objects/User";
export declare class CustomerUser {
    type: CustomerUser.Types;
    constructor(type: CustomerUser.Types);
    toJSON(): {
        link: CustomerUser.Link;
        value?: undefined;
    } | {
        value: CustomerUser.Value;
        link?: undefined;
    } | undefined;
    static fromJSON(json: any): CustomerUser;
}
export declare namespace CustomerUser {
    type Types = CustomerUser.Link | CustomerUser.Value;
    class Link {
        url: URL;
        constructor(url: URL);
    }
    class Value {
        customer: User.Responses.Partial;
        constructor(customer: User.Responses.Partial);
    }
}
