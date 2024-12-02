import { Price } from "../primitives/Price";
import { Int } from "../tsPrimitives/Int";
import { UUID } from "../tsPrimitives/UUID";
import { Procedure } from "./Procedure";
export declare namespace Complex {
    namespace Parameters {
        class Retrieve {
            salons?: UUID[];
            employees?: UUID[];
            constructor(salons?: UUID[], employees?: UUID[]);
        }
        class Create {
            description?: string;
            alias?: string;
            price: Price;
            duration: Int;
            procedureIds: UUID[];
            constructor(price: Price, duration: Int, procedureIds: UUID[], description?: string, alias?: string);
        }
        class Patch {
            description?: string;
            alias?: string;
            price: Price;
            duration: Int;
            procedureIds: UUID[];
            constructor(procedureIds: UUID[], price: Price, duration: Int, description?: string, alias?: string);
        }
    }
    namespace Responses {
        class Full {
            description?: string;
            alias?: string;
            id: UUID;
            price: Price;
            duration: Int;
            procedures: Procedure.Responses.Partial[];
            constructor(id: UUID, price: Price, duration: Int, description?: string, alias?: string, procedures?: Procedure.Responses.Partial[]);
        }
        class Partial {
            description?: string;
            alias?: string;
            id: UUID;
            price: Price;
            duration: Int;
            procedures: Procedure.Responses.Partial[];
            constructor(id: UUID, price: Price, duration: Int, procedures: Procedure.Responses.Partial[], description?: string, alias?: string);
        }
    }
}
