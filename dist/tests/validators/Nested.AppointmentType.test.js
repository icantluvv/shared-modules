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
const AppointmentType_1 = require("../../dto/enums/AppointmentType");
const UUID_1 = require("../../dto/tsPrimitives/UUID");
const EzValidate_1 = require("../../dto/validate/EzValidate");
test("AppointmenType error", () => __awaiter(void 0, void 0, void 0, function* () {
    let id = new UUID_1.UUID();
    id.uuid = "хуй";
    const procedure = new AppointmentType_1.AppointmentType.Procedure(id);
    (0, EzValidate_1.ezValidate)(procedure).catch(e => expect(e).toBe("parse Procedure error"));
}));
test("AppointmenType ok", () => __awaiter(void 0, void 0, void 0, function* () {
    const procedure = new AppointmentType_1.AppointmentType.Procedure(new UUID_1.UUID());
    yield (0, EzValidate_1.ezValidate)(procedure);
}));
//# sourceMappingURL=Nested.AppointmentType.test.js.map