"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ezValidate = ezValidate;
const class_validator_1 = require("class-validator");
async function ezValidate(some) {
    const errors = await (0, class_validator_1.validate)(some);
    if (errors.length > 0) {
        throw "parse " + some.constructor.name + " error";
    }
}
