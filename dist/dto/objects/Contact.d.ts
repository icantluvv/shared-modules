import { ContactType } from "../enums/ContactType";
import { UUID } from "../tsPrimitives/UUID";
export declare namespace Contact {
    namespace Parameters {
        class Create {
            value: string;
            type: ContactType;
            isVerify?: boolean;
            constructor(value: string, type: ContactType, isVerify?: boolean);
        }
        class SendCode {
            recaptchaToken?: string;
            constructor(recaptchaToken?: string);
        }
        class Verify {
            code: string;
            constructor(code: string);
        }
    }
    namespace Responses {
        class Full {
            value: string;
            isVerify: boolean;
            type: ContactType;
            id: UUID;
            constructor(id: UUID, value: string, isVerify: boolean, type: ContactType);
        }
        class Verified {
            isVerified: boolean;
            constructor(isVerified: boolean);
        }
    }
}
