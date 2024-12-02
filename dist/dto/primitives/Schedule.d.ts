import { Int } from "../tsPrimitives/Int";
import { IsoDate } from "../tsPrimitives/IsoDate";
export declare namespace Schedule {
    type Types = Schedule.Week | Schedule.Cycled | Schedule.Day | Schedule.Empty;
    export class Pattern {
        schedule: Types;
        constructor(pattern: Types);
        toJSON(): {
            weekly: {
                week: Week;
            };
            cycled?: undefined;
            daily?: undefined;
            empty?: undefined;
        } | {
            cycled: {
                cycle: Cycled;
            };
            weekly?: undefined;
            daily?: undefined;
            empty?: undefined;
        } | {
            daily: {
                day: Day;
            };
            weekly?: undefined;
            cycled?: undefined;
            empty?: undefined;
        } | {
            empty: {
                empty: string;
            };
            weekly?: undefined;
            cycled?: undefined;
            daily?: undefined;
        } | undefined;
        static fromJSON(json: any): Pattern;
    }
    export class Week {
        monday?: Day;
        tuesday?: Day;
        wednesday?: Day;
        thursday?: Day;
        friday?: Day;
        saturday?: Day;
        sunday?: Day;
        constructor(monday?: Day, tuesday?: Day, wednesday?: Day, thursday?: Day, friday?: Day, saturday?: Day, sunday?: Day);
    }
    export class Cycled {
        startDay: IsoDate;
        workDays: Map<Int, Day>;
        restDays: Int;
        constructor(startDay: IsoDate, workDays: Map<Int, Day>, restDays: Int);
    }
    export class Day {
        workTime: String;
        offTime: string[];
        constructor(workTime: String, offTime: string[]);
    }
    export class Empty {
    }
    export {};
}
