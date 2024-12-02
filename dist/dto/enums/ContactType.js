"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactType = void 0;
/// Описывает поддерживаемые типы контактных данных.
/// - `PHONE`    : Телефонный номер.
/// - `EMAIL`    : Электронная почта.
/// - `TELEGRAM` : Идентификатор Telegram.
/// - `WHATSAPP` : Идентификатор WhatsApp.
/// - `INSTAGRAM`: Идентификатор Instagram.
/// - `MESSAGE`  : Сообщение в приложении
var ContactType;
(function (ContactType) {
    ContactType["phone"] = "phone";
    ContactType["email"] = "email";
    ContactType["telegram"] = "telegram";
    ContactType["whatsapp"] = "whatsapp";
    ContactType["intagram"] = "instagram";
    ContactType["message"] = "message";
})(ContactType || (exports.ContactType = ContactType = {}));
