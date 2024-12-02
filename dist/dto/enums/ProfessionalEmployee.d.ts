import { Professional } from "../objects/Professional";
export declare class ProfessionalEmployee {
    type: ProfessionalEmployee.Types;
    constructor(type: ProfessionalEmployee.Types);
    toJSON(): {
        link: ProfessionalEmployee.Link;
        value?: undefined;
    } | {
        value: ProfessionalEmployee.Value;
        link?: undefined;
    } | undefined;
    static fromJSON(json: any): ProfessionalEmployee;
}
export declare namespace ProfessionalEmployee {
    type Types = ProfessionalEmployee.Link | ProfessionalEmployee.Value;
    class Link {
        url: URL;
        constructor(url: URL);
    }
    class Value {
        professional: Professional.Responses.Partial;
        constructor(professional: Professional.Responses.Partial);
    }
}
