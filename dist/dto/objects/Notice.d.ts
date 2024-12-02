import { NoticeCategory } from "../enums/NoticeCategory";
import { UUID } from "../tsPrimitives/UUID";
import { IsoDate } from "../tsPrimitives/IsoDate";
export declare namespace Notice {
    namespace Parameters { }
    namespace Responses {
        class Full {
            id: UUID;
            titleKey: string;
            messageKey: string;
            parameters?: string;
            category: NoticeCategory;
            isRead: boolean;
            date?: IsoDate;
            constructor(id: UUID, titleKey: string, messageKey: string, category: NoticeCategory, isRead: boolean, parameters?: string, date?: IsoDate);
        }
    }
}
