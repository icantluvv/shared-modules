import { Contact } from "./Contact";
import { UserRoleSet } from '../optionSet/UserRoleSet';
import { MaestriPermissionSet } from '../optionSet/MaestriPermissionSet';
import { UUID } from "../tsPrimitives/UUID";
export declare namespace User {
    namespace Parameters {
        class Patch {
            nickname?: string;
            avatar?: URL;
            contact?: Contact.Parameters.Create;
            constructor(nickname?: string, avatar?: URL, contact?: Contact.Parameters.Create);
        }
    }
    namespace Responses {
        class Full {
            nickname: string;
            avatar?: URL;
            id: UUID;
            options: UserRoleSet;
            permissions: MaestriPermissionSet;
            contact?: Contact.Responses.Full;
            constructor(id: UUID, options: UserRoleSet, permissions: MaestriPermissionSet, nickname: string, avatar?: URL, contact?: Contact.Responses.Full);
        }
        class Partial {
            avatar?: URL;
            nickname: string;
            constructor(nickname: string, avatar?: URL);
        }
    }
}
