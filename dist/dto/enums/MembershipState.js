"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipState = void 0;
/// Описывает состояние подписки
/// - `ACTIVE`  : Подписка активна
/// - `CANCEL`  : Подписка отменена
/// - `INACTIVE`: Подписка неактивна
var MembershipState;
(function (MembershipState) {
    MembershipState["active"] = "active";
    MembershipState["cancel"] = "cancel";
    MembershipState["inactive"] = "inactive";
})(MembershipState || (exports.MembershipState = MembershipState = {}));
