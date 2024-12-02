import { DateInterval } from "../tsPrimitives/DateInterval";
import { UUID } from "../tsPrimitives/UUID";
import { Schedule } from "../primitives/Schedule";
import { TimetableOwner } from "../enums/TimetableOwner";
import { AppointmentType } from "../enums/AppointmentType";
import { IsoDate } from "../tsPrimitives/IsoDate";
export declare namespace Timetable {
    namespace Parameters {
        namespace Create {
            class Pattern {
                startAt: IsoDate;
                endAt?: IsoDate;
                schedule: Schedule.Pattern;
                constructor(schedule: Schedule.Pattern, startAt: IsoDate, endAt?: IsoDate);
            }
            class Flexible {
                workDays: Map<Date, Schedule.Day>;
                constructor(workDays: Map<Date, Schedule.Day>);
            }
        }
        class SearchSlot {
            appointmentType: AppointmentType;
            customerId?: UUID;
            constructor(appointmentType: AppointmentType, customerId?: UUID);
        }
        class Retrieve {
            owners: TimetableOwner[];
            period: DateInterval;
            constructor(owners: TimetableOwner[], period: DateInterval);
        }
    }
    namespace Responses {
        type Intervals = DateInterval[];
        export class Slots {
            intervals: Intervals;
            timeZoneId: string;
            constructor(intervals: Intervals, timeZoneId: string);
        }
        export class Schedule {
            owner: TimetableOwner;
            intervals: Intervals;
            timeZoneId: string;
            constructor(owner: TimetableOwner, intervals: Intervals, timeZoneId: string);
        }
        export {};
    }
}
