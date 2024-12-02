import { UUID } from "../tsPrimitives/UUID";
export declare class TimetableOwner {
    type: TimetableOwner.Types;
    constructor(type: TimetableOwner.Types);
    toJSON(): string | undefined;
    static fromJSON(json: any): TimetableOwner;
}
export declare namespace TimetableOwner {
    type Types = TimetableOwner.Employee | TimetableOwner.Salon;
    class Salon {
        id: UUID;
        constructor(id: UUID);
    }
    class Employee {
        id: UUID;
        constructor(id: UUID);
    }
}
