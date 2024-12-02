import { UUID } from "../tsPrimitives/UUID";
export declare class AppointmentType {
    type: AppointmentType.Types;
    constructor(type: AppointmentType.Types);
    toJSON(): {
        procedure: AppointmentType.Procedure;
        complex?: undefined;
    } | {
        complex: AppointmentType.Complex;
        procedure?: undefined;
    } | undefined;
    static fromJSON(json: any): AppointmentType;
}
export declare namespace AppointmentType {
    type Types = AppointmentType.Complex | AppointmentType.Procedure;
    class Procedure {
        id: UUID;
        constructor(id: UUID);
    }
    class Complex {
        id: UUID;
        constructor(id: UUID);
    }
}
