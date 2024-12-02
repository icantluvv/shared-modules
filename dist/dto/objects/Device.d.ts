import { VersionType } from "../enums/VersionType";
import { SystemType } from "../enums/SystemType";
import { UUID } from "../tsPrimitives/UUID";
export declare namespace Device {
    namespace Parameters {
        class System {
            manufacturer?: string;
            model?: string;
            system?: SystemType;
            appVersion?: string;
            country?: string;
            fcmToken?: string;
            constructor(manufacturer?: string, model?: string, system?: SystemType, appVersion?: string, country?: string, fcmToken?: string);
        }
    }
    namespace Responses {
        class Full {
            version?: VersionType;
            id: UUID;
            constructor(id: UUID, version?: VersionType);
        }
    }
}
