import { Price } from "../primitives/Price";
import { Int } from "../tsPrimitives/Int";
import { UUID } from "crypto";
import { IsoDate } from "../tsPrimitives/IsoDate";
export declare namespace Statistic {
    namespace Parameters {
        class AppointmentsQuery {
            startDate: IsoDate;
            endDate: IsoDate;
            employees?: UUID[];
            salons?: UUID[];
            constructor(startDate: IsoDate, endDate: IsoDate, employees?: UUID[], salons?: UUID[]);
        }
    }
    namespace Responses {
        class Appointments {
            price: Price;
            count: Int;
            constructor(price: Price, count: Int);
        }
    }
}
