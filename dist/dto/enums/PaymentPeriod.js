"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPeriod = void 0;
// Описывает частоту выплат
// - `MONTH`: Раз в месяц
// - `DAY`  : Раз в день
// - `HOUR` : Раз в час
var PaymentPeriod;
(function (PaymentPeriod) {
    PaymentPeriod["month"] = "month";
    PaymentPeriod["day"] = "day";
    PaymentPeriod["hour"] = "hour";
})(PaymentPeriod || (exports.PaymentPeriod = PaymentPeriod = {}));
