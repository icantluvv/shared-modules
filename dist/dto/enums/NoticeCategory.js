"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeCategory = void 0;
/// Описывает категорию уведомлений
/// - `APPOINTMENT_EMPLOYEE`: Уведомления о рабочих аппоинтментах
/// - `APPOINTMENT_CUSTOMER`: Уведомления о кастомерских аппоинтментах
/// - `EMPLOYEE`            : Уведомления рабочему (мб оверхед)
/// - `POSITION`            : Уведомления о изменении позиции
/// - `SALARY`              : Уведомления о зарплате
/// - `SUGGEST`             : Предложение о смерживании контактов
var NoticeCategory;
(function (NoticeCategory) {
    NoticeCategory["appointmentEmployee"] = "appointmentEmployee";
    NoticeCategory["appointmentCustomer"] = "appointmentCustomer";
    NoticeCategory["employee"] = "employee";
    NoticeCategory["position"] = "position";
    NoticeCategory["salary"] = "salary";
    NoticeCategory["suggest"] = "suggest";
})(NoticeCategory || (exports.NoticeCategory = NoticeCategory = {}));
