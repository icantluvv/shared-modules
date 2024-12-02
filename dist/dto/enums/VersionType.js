"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionType = void 0;
///  VersionType возвращает тип версии вашего api клиента
///
/// - `LATEST`     : Последняя
/// - `STABLE`     : Рабочая но лучше обновиться
/// - `UNSUPPORTED`: Неподдерживаемая
var VersionType;
(function (VersionType) {
    VersionType["latest"] = "latest";
    VersionType["stable"] = "stable";
    VersionType["unsupported"] = "unsupported";
})(VersionType || (exports.VersionType = VersionType = {}));
