"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsoDate = void 0;
const date_fns_1 = require("date-fns");
class IsoDate {
    constructor(date = new Date()) {
        this.date = date;
    }
    toJSON() {
        return (0, date_fns_1.formatRFC3339)(this.date);
    }
    fromJSON(json) {
        return new IsoDate(new Date(json));
    }
}
exports.IsoDate = IsoDate;
