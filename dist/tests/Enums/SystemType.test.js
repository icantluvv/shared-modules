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
const SystemType_1 = require("../../dto/enums/SystemType");
test("Schedule empty", () => __awaiter(void 0, void 0, void 0, function* () {
    const sys = new SystemType_1.SystemType(new SystemType_1.SystemType.Android("10.0"));
    const json = sys.toJSON();
    console.log(sys);
    console.log(json);
    const newSys = SystemType_1.SystemType.fromJSON(json);
    console.log(sys);
    console.log(json);
    console.log(newSys);
    expect(JSON.stringify(sys) === JSON.stringify(newSys)).toBe(true);
}));
//# sourceMappingURL=SystemType.test.js.map