import { SalaryPaymentType } from "../enums/SalaryPaymentType";
import { Int } from "../tsPrimitives/Int";
import { Wage } from "../primitives/Wage";
import { Price } from "../primitives/Price";
import { UUID } from "../tsPrimitives/UUID";
import { Service } from "./Service";
import { IsoDate } from "../tsPrimitives/IsoDate";
import { PaymentType } from "../enums/PaymentType";
export declare namespace Salary {
    namespace Parameters {
        namespace Rules {
            class Create {
                percent?: Int;
                grid?: Map<UUID, SalaryPaymentType>;
                wage?: Wage;
                constructor(percent?: Int, grid?: Map<UUID, SalaryPaymentType>, wage?: Wage);
            }
        }
        namespace Balance {
            class Payout {
                paymentType: PaymentType;
                dateTo: IsoDate;
                constructor(paymentType: PaymentType, dateTo: IsoDate);
            }
            class Calculate {
                dateTo: IsoDate;
                constructor(dateTo: IsoDate);
            }
        }
    }
    namespace Responses {
        namespace Rules {
            class Full {
                percent?: Int;
                grid?: Map<Service.Responses.Partial, SalaryPaymentType>;
                wage?: Wage;
                constructor(percent?: Int, grid?: Map<Service.Responses.Partial, SalaryPaymentType>, wage?: Wage);
            }
        }
        namespace Balance {
            class Full {
                wage?: Price;
                grid?: Price[];
                procent?: Price[];
                sum: Price[];
                constructor(sum: Price[], wage?: Price, grid?: Price[], procent?: Price[]);
            }
        }
    }
}
