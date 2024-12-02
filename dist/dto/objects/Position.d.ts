import { PermissionSet } from "../optionSet/PermissionSet";
import { Salary } from "./Salary";
import { UUID } from "../tsPrimitives/UUID";
export declare namespace Position {
    namespace Parameters {
        class Create {
            title: string;
            permissions: PermissionSet;
            salary: Salary.Parameters.Rules.Create;
            constructor(title: string, permissions: PermissionSet, salary: Salary.Parameters.Rules.Create);
        }
        class Patch {
            title?: string;
            permissions?: PermissionSet;
            salary?: Salary.Parameters.Rules.Create;
            constructor(title?: string, permissions?: PermissionSet, salary?: Salary.Parameters.Rules.Create);
        }
    }
    namespace Responses {
        class Full {
            title: string;
            id: UUID;
            permissions: PermissionSet;
            salary: Salary.Responses.Rules.Full;
            constructor(id: UUID, title: string, permissions: PermissionSet, salary: Salary.Responses.Rules.Full);
        }
        class Partial {
            title: string;
            id: UUID;
            constructor(id: UUID, title: string);
        }
    }
}
