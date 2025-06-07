"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const joi = require("joi");
const envSchema = joi
    .object({
    PORT: joi.number().required(),
})
    .unknown(true);
const { error, value } = envSchema.validate(process.env);
if (error) {
    throw new Error(`Config error: ${error.message}`);
}
const envVariables = value;
exports.envs = {
    port: envVariables.PORT,
};
//# sourceMappingURL=envs.js.map