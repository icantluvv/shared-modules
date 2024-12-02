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
const Schedule_1 = require("../../dto/primitives/Schedule");
const Int_1 = require("../../dto/tsPrimitives/Int");
const IsoDate_1 = require("../../dto/tsPrimitives/IsoDate");
test("Schedule day", () => __awaiter(void 0, void 0, void 0, function* () {
    const day = new Schedule_1.Schedule.Pattern(new Schedule_1.Schedule.Day("10:00", ["10:00"]));
    const json = day.toJSON();
    const newSchedule = Schedule_1.Schedule.Pattern.fromJSON(json);
    expect(JSON.stringify(day) === JSON.stringify(newSchedule)).toBe(true);
}));
test("Schedule cycle", () => __awaiter(void 0, void 0, void 0, function* () {
    const cycle = new Schedule_1.Schedule.Pattern(new Schedule_1.Schedule.Cycled(new IsoDate_1.IsoDate(), new Map([[new Int_1.Int(1), new Schedule_1.Schedule.Day("10:00", ["10:00"])]]), new Int_1.Int(5)));
    const json = cycle.toJSON();
    const newSchedule = Schedule_1.Schedule.Pattern.fromJSON(json);
    expect(JSON.stringify(cycle) === JSON.stringify(newSchedule)).toBe(true);
}));
test("Schedule week", () => __awaiter(void 0, void 0, void 0, function* () {
    const week = new Schedule_1.Schedule.Pattern(new Schedule_1.Schedule.Week(undefined, undefined, undefined, new Schedule_1.Schedule.Day("10:00", ["10:00"]), undefined, undefined, undefined));
    const json = week.toJSON();
    const newSchedule = Schedule_1.Schedule.Pattern.fromJSON(json);
    expect(JSON.stringify(week) === JSON.stringify(newSchedule)).toBe(true);
}));
test("Schedule empty", () => __awaiter(void 0, void 0, void 0, function* () {
    const empty = new Schedule_1.Schedule.Pattern(new Schedule_1.Schedule.Empty());
    const json = empty.toJSON();
    const newSchedule = Schedule_1.Schedule.Pattern.fromJSON(json);
    expect(JSON.stringify(empty) === JSON.stringify(newSchedule)).toBe(true);
}));
//# sourceMappingURL=Schedule.test.js.map