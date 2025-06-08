import { IsString, Matches } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @Matches(/^u\d{8}$/, {
    message: 'El código debe iniciar con "U" seguido de 8 dígitos numéricos',
  })
  cod: string

  @IsString()
  nombre: string

  @IsString()
  contraseña: string

  @IsString()
  token: string
}
