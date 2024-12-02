"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentType = void 0;
/// Описывает тип выплаты
/// - `BANK_TRANSFER`: Банковский перевод
/// - `REAL`         : Кеш
/// - `CRYPT`        : Криптовалюта
var PaymentType;
(function (PaymentType) {
    PaymentType["BANK_TRANSFER"] = "bankTransfer";
    PaymentType["REAL"] = "real";
    PaymentType["CRYPT"] = "crypt";
})(PaymentType || (exports.PaymentType = PaymentType = {}));
