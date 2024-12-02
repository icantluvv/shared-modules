import { Address } from "../primitives/Address";
import { SalonType } from "../enums/SalonType";
import { Timetable } from "./Timetable";
import { Contact } from "./Contact";
import { UUID } from "../tsPrimitives/UUID";
export declare namespace Salon {
    namespace Parameters {
        class Create {
            name: string;
            type: SalonType;
            logo?: URL;
            description?: string;
            timeZoneId: string;
            localeId: string;
            timetable: Timetable.Parameters.Create.Pattern;
            address: Address;
            contacts: Contact.Parameters.Create[];
            constructor(name: string, type: SalonType, timeZoneId: string, localeId: string, timetable: Timetable.Parameters.Create.Pattern, address: Address, contacts: Contact.Parameters.Create[], logo?: URL, description?: string);
        }
        class Patch {
            name?: string;
            type?: SalonType;
            description?: string;
            logo?: URL;
            constructor(name?: string, type?: SalonType, description?: string, logo?: URL);
        }
    }
    namespace Responses {
        class Full {
            id: UUID;
            name: string;
            type: SalonType;
            description?: string;
            logo?: URL;
            isActive: boolean;
            canEdit: boolean;
            isFavorite: boolean;
            address: Address;
            localeId: string;
            timeZoneId: string;
            constructor(id: UUID, name: string, type: SalonType, address: Address, isActive: boolean, canEdit: boolean, isFavorite: boolean, localeId: string, timeZoneId: string, description?: string, logo?: URL);
        }
        class Partial {
            id: UUID;
            address: Address;
            name: string;
            type: SalonType;
            logo?: URL;
            isFavorite: boolean;
            constructor(id: UUID, name: string, type: SalonType, address: Address, isFavorite: boolean, logo?: URL);
        }
    }
}
