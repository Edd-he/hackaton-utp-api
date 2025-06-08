import { IsString, Matches } from 'class-validator'

export class SignInDto {
  @IsString()
  @Matches(/^u\d{8}$/, {
    message: 'El código debe iniciar con "u" seguido de 8 dígitos numéricos',
  })
  cod: string

  @IsString()
  contraseña: string
}
