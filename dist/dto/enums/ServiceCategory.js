"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategory = void 0;
/// Описывает категории всех сервисов
/// - `NAILS`       : Ногти
/// - `MASSAGE`     : Массаж
/// - `SPA`         : Спа
/// - `COSMETOLOGY` : Косметология
/// - `HAIRDRESSING`: Парикмахерские услуги
/// - `EPILATION`   : Эпиляция
/// - `DEPILATION`  : Депиляция
/// - `TATTOO`      : Тату
/// - `PIERCING`    : Пирсинг
/// - `MAKEUP`      : Мейкап
/// - `BROWS`       : Брови
/// - `LASHES`      : Ресницы
/// - `OTHER`       : Остальное
var ServiceCategory;
(function (ServiceCategory) {
    ServiceCategory["nails"] = "nails";
    ServiceCategory["massage"] = "massage";
    ServiceCategory["spa"] = "spa";
    ServiceCategory["cosmetology"] = "cosmetology";
    ServiceCategory["hairdressing"] = "hairdressing";
    ServiceCategory["epilation"] = "epilation";
    ServiceCategory["depilation"] = "depilation";
    ServiceCategory["tattoo"] = "tattoo";
    ServiceCategory["piercing"] = "piercing";
    ServiceCategory["makeup"] = "makeup";
    ServiceCategory["brows"] = "brows";
    ServiceCategory["lashes"] = "lashes";
    ServiceCategory["other"] = "other";
})(ServiceCategory || (exports.ServiceCategory = ServiceCategory = {}));
