import { Int } from "../tsPrimitives/Int";
import { ServiceCategory } from "../enums/ServiceCategory";
import { Procedure } from "./Procedure";
import { Price } from "../primitives/Price";
import { UUID } from "../tsPrimitives/UUID";
export declare namespace Service {
    namespace Parameters {
        class Retrieve {
            value?: string;
            salons?: UUID[];
            employees?: UUID[];
            page: Int;
            per: Int;
            constructor(page: Int, per: Int, salons?: UUID[], employees?: UUID[], value?: string);
        }
        class RetrieveFull {
            salon?: UUID;
            constructor(salon?: UUID);
        }
        class Create {
            title: string;
            description: string;
            category: ServiceCategory;
            language?: string;
            constructor(title: string, description: string, category: ServiceCategory, language?: string);
        }
        class Patch {
            title?: string;
            description?: string;
            category?: ServiceCategory;
            language?: string;
            constructor(title?: string, description?: string, category?: ServiceCategory, language?: string);
        }
    }
    namespace Responses {
        class Full {
            title: string;
            description: string;
            category: ServiceCategory;
            id: UUID;
            procedure: Procedure.Responses.Full[];
            constructor(id: UUID, title: string, description: string, category: ServiceCategory, procedure: Procedure.Responses.Full[]);
        }
        class Partial {
            title: string;
            description: string;
            category: ServiceCategory;
            id: UUID;
            minPrice?: Price;
            minDuration?: Int;
            constructor(id: UUID, title: string, description: string, category: ServiceCategory, minPrice?: Price, minDuration?: Int);
        }
        class Micro {
            title: string;
            description: string;
            category: ServiceCategory;
            id: UUID;
            constructor(id: UUID, title: string, description: string, category: ServiceCategory);
        }
    }
}
