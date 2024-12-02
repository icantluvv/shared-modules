"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalonType = void 0;
/// Описывает тип Салона
/// - `INDIVIDUAL`: Индивидуальное предприятие
/// - `CHAIN`     : Сеть салонов
/// - `MASTER`    : Самозанятый мастер
var SalonType;
(function (SalonType) {
    SalonType["individual"] = "individual";
    SalonType["chain"] = "chain";
    SalonType["master"] = "master";
})(SalonType || (exports.SalonType = SalonType = {}));
