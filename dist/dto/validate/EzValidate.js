"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDTO = validateDTO;
const class_validator_1 = require("class-validator");
async function validateDTO(dto) {
    const errors = await (0, class_validator_1.validate)(dto);
    if (errors.length > 0) {
        throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
    }
}
