import 'dotenv/config'
import * as joi from 'joi'

type EnvVariables = {
  PORT: number
  JWT: string
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    JWT: joi.string().required(),
  })
  .unknown(true)

const { error, value } = envSchema.validate(process.env)

if (error) {
  throw new Error(`Config error: ${error.message}`)
}
const envVariables: EnvVariables = value

export const envs = {
  port: envVariables.PORT,
  jwt: envVariables.JWT,
}
