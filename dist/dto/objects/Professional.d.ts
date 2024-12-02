import { User } from "./User";
export declare namespace Professional {
    namespace Parameters {
        class Create {
            constructor();
        }
    }
    namespace Responses {
        class Partial {
            user: User.Responses.Partial;
            constructor(user: User.Responses.Partial);
        }
    }
}
