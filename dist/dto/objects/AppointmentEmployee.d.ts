import { DateInterval } from "../tsPrimitives/DateInterval";
import { Price } from "../primitives/Price";
import { Address } from "../primitives/Address";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { AppointmentType } from "../enums/AppointmentType";
import { UUID } from "../tsPrimitives/UUID";
import { Salon } from "./Salon";
import { Customer } from "./Customer";
import { Procedure } from "./Procedure";
import { IsoDate } from "../tsPrimitives/IsoDate";
export declare namespace AppointmentEmployee {
    namespace Parameters {
        class Retrieve {
            startDate?: IsoDate;
            endDate?: IsoDate;
            employees?: UUID[];
            salons?: UUID[];
            customer?: UUID;
            constructor(startDate?: IsoDate, endDate?: IsoDate, employees?: UUID[], salons?: UUID[], customer?: UUID);
        }
        class Create {
            type: AppointmentType;
            customerId: UUID;
            time: DateInterval;
            constructor(customerId: UUID, type: AppointmentType, time: DateInterval);
        }
        class Patch {
            time: DateInterval;
            constructor(time: DateInterval);
        }
        class Approve {
            appointmentsEmployeeId: UUID[];
            constructor(appointmentsEmployeeId: UUID[]);
        }
    }
    namespace Responses {
        class Full {
            salon: Salon.Responses.Partial;
            customer: Customer.Responses.Partial;
            address: Address;
            associative: Base[];
            constructor(salon: Salon.Responses.Partial, customer: Customer.Responses.Partial, address: Address, associative: Base[]);
        }
        class Partial {
            customer: Customer.Responses.Partial;
            associative: Base[];
            constructor(customer: Customer.Responses.Partial, associative: Base[]);
        }
        class Base {
            id: UUID;
            status: AppointmentStatus;
            procedure: Procedure.Responses.Partial;
            time: DateInterval;
            price: Price;
            constructor(id: UUID, status: AppointmentStatus, procedure: Procedure.Responses.Partial, time: DateInterval, price: Price);
        }
    }
}
