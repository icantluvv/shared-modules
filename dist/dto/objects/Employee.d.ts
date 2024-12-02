import { ProfessionalEmployee } from "../enums/ProfessionalEmployee";
import { UUID } from "../tsPrimitives/UUID";
import { Contact } from "./Contact";
import { Timetable } from "./Timetable";
import { Position } from "./Position";
import { User } from "./User";
export declare namespace Employee {
    namespace Parameters {
        class Retrieve {
            salonsId: UUID[];
            constructor(salonsId: UUID[]);
        }
        class Invite {
            description?: string;
            salonId: UUID;
            positionId: UUID;
            contacts: Contact.Parameters.Create[];
            timetable?: Timetable.Parameters.Create.Pattern;
            constructor(salonId: UUID, positionId: UUID, contacts: Contact.Parameters.Create[], timetable?: Timetable.Parameters.Create.Pattern, description?: string);
        }
        class Patch {
            positionId?: UUID;
            constructor(positionId?: UUID);
        }
    }
    namespace Responses {
        class Full {
            description?: string;
            canEdit: boolean;
            id: UUID;
            user: ProfessionalEmployee;
            contacts: Contact.Responses.Full[];
            salonId: UUID;
            position: Position.Responses.Full;
            constructor(id: UUID, user: ProfessionalEmployee, canEdit: boolean, contacts: Contact.Responses.Full[], salonId: UUID, position: Position.Responses.Full, description?: string);
        }
        class Partial {
            id: UUID;
            user?: User.Responses.Partial;
            contacts: Contact.Responses.Full[];
            position: Position.Responses.Partial;
            constructor(id: UUID, contacts: Contact.Responses.Full[], position: Position.Responses.Partial, user?: User.Responses.Partial);
        }
    }
}
