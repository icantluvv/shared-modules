"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentStatus = void 0;
///  Описывает состояние Appointment
///  Поле: AppointmentEmployee | AppointmentCustomer
///
/// - `BOTH_APPROVED`    : Все участники Appointment подтвердили запрос
/// - `CUSTOMER_DECLINED`: Customer отменил Appointment
/// - `MASTER_DECLINED`  : Какой-то Employee отменил Appointment
/// - `MASTER_APPROVED`  : (AppointmentEmployee) соответствующий Employee подтвердил участие
/// - `CUSTOMER_APPROVED`: (AppointmentCustomer) соответствующий Customer подтвердил участие
/// - `REQUESTED`        : соответствующий Employee/Customer не подтвердил свое участие
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["requested"] = "requested";
    AppointmentStatus["customerApproved"] = "customer_approved";
    AppointmentStatus["masterApproved"] = "master_approved";
    AppointmentStatus["bothApproved"] = "both_approved";
    AppointmentStatus["customerDeclined"] = "customer_declined";
    AppointmentStatus["masterDeclined"] = "master_declined";
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
