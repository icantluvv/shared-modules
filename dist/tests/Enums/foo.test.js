"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
test("хуй", () => __awaiter(void 0, void 0, void 0, function* () {
    const date = (0, date_fns_1.formatRFC3339)(new Date().toISOString());
    console.log(date);
}));
test("пизда", () => __awaiter(void 0, void 0, void 0, function* () {
    const date = "2024-10-20T00:00:00Z";
    const res = Date.parse(date);
    const date2 = "2024-11-20T22:44:26.622Z";
    const res2 = Date.parse(date2);
    console.log(res);
    console.log(res2);
}));
//# sourceMappingURL=foo.test.js.map