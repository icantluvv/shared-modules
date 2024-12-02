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
const Int_1 = require("../../dto/tsPrimitives/Int");
const EzValidate_1 = require("../../dto/validate/EzValidate");
test("Int ok", () => __awaiter(void 0, void 0, void 0, function* () {
    const int = new Int_1.Int(5);
    yield (0, EzValidate_1.ezValidate)(int);
}));
test("Int error", () => __awaiter(void 0, void 0, void 0, function* () {
    const int = new Int_1.Int(5.5);
    (0, EzValidate_1.ezValidate)(int).catch(e => expect(e).toBe("parse Int error"));
}));
//# sourceMappingURL=Int.test.js.map