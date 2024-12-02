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
const AppointmentStatus_1 = require("../../dto/enums/AppointmentStatus");
test("AppointmentStatus toJson", () => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentStatus = AppointmentStatus_1.AppointmentStatus.bothApproved;
    expect(JSON.stringify(appointmentStatus)).toBe('"bothApproved"');
}));
test("AppointmentStatus fromJson", () => __awaiter(void 0, void 0, void 0, function* () {
    const json = 'bothApproved';
    const appointmentType = AppointmentStatus_1.AppointmentStatus.bothApproved;
    expect(AppointmentStatus_1.AppointmentStatus[json]).toBe(appointmentType);
}));
//# sourceMappingURL=AppointmentStatus.test.js.map