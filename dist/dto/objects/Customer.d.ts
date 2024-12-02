import { CustomerUser } from "../enums/CustomerUser";
import { UUID } from "../tsPrimitives/UUID";
import { Contact } from "./Contact";
export declare namespace Customer {
    namespace Parameters {
        class Create {
            alias: string;
            salonId?: UUID;
            contacts: Contact.Parameters.Create[];
            constructor(alias: string, contacts: Contact.Parameters.Create[], salonId?: UUID);
        }
        class Registration {
            contacts: Contact.Parameters.Create[];
            constructor(contacts: Contact.Parameters.Create[]);
        }
        class Retrieve {
            salons?: UUID[];
            employees?: UUID[];
            constructor(salons?: UUID[], employees?: UUID[]);
        }
        class HandleInvite {
            contact?: string;
            constructor(contact?: string);
        }
    }
    namespace Responses {
        class Full {
            user: CustomerUser;
            alias?: string;
            id: UUID;
            contacts: Contact.Responses.Full[];
            constructor(id: UUID, user: CustomerUser, contacts: Contact.Responses.Full[], alias?: string);
        }
        class Partial {
            user: CustomerUser;
            alias?: string;
            id: UUID;
            contacts: Contact.Responses.Full[];
            constructor(id: UUID, user: CustomerUser, contacts: Contact.Responses.Full[], alias?: string);
        }
        class Verify {
            contacts: Contact.Responses.Full[];
            constructor(contacts: Contact.Responses.Full[]);
        }
    }
}
