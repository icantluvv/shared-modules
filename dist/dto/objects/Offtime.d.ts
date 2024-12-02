import { DateInterval } from "../tsPrimitives/DateInterval";
import { Decimal } from "../tsPrimitives/Decimal";
import { UUID } from "../tsPrimitives/UUID";
import { TimetableOwner } from "../enums/TimetableOwner";
export declare namespace Offtime {
    namespace Parameters {
        class Create {
            reason?: string;
            interval: DateInterval;
            coefficient: Decimal;
            constructor(interval: DateInterval, coefficient: Decimal, reason?: string);
        }
        class Retrieve {
            owners: TimetableOwner[];
            period: DateInterval;
            constructor(owners: TimetableOwner[], period: DateInterval);
        }
    }
    namespace Responses {
        class Full {
            reason?: string;
            id: UUID;
            interval: DateInterval;
            timeZoneId: string;
            coefficient: Decimal;
            constructor(id: UUID, interval: DateInterval, timeZoneId: string, coefficient: Decimal, reason?: string);
        }
        class Partial {
            id: UUID;
            interval: DateInterval;
            constructor(id: UUID, interval: DateInterval);
        }
    }
}
