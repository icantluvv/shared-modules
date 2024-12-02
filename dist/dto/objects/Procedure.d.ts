import { Price } from "../primitives/Price";
import { Int } from "../tsPrimitives/Int";
import { UUID } from "../tsPrimitives/UUID";
import { Service } from "./Service";
import { Employee } from "./Employee";
export declare namespace Procedure {
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
            serviceId: UUID;
            employeeId: UUID;
            constructor(price: Price, duration: Int, serviceId: UUID, employeeId: UUID, description?: string, alias?: string);
        }
        class Patch {
            description?: string;
            alias?: string;
            price?: Price;
            duration?: Int;
            constructor(price?: Price, duration?: Int, description?: string, alias?: string);
        }
    }
    namespace Responses {
        class Full {
            description?: string;
            alias?: string;
            id: UUID;
            price: Price;
            duration: Int;
            service: Service.Responses.Micro;
            master: Employee.Responses.Partial;
            constructor(id: UUID, price: Price, duration: Int, service: Service.Responses.Micro, master: Employee.Responses.Partial, description?: string, alias?: string);
        }
        class Partial {
            description?: string;
            alias?: string;
            id: UUID;
            price: Price;
            duration: Int;
            service: Service.Responses.Micro;
            master: Employee.Responses.Partial;
            constructor(id: UUID, price: Price, duration: Int, service: Service.Responses.Micro, master: Employee.Responses.Partial, description?: string, alias?: string);
        }
    }
}
