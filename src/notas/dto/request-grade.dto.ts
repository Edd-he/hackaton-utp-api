import { IsString } from 'class-validator'
export class RequestGradesDto {
  @IsString()
  portal_token: string
  @IsString()
  period: string
  @IsString()
  cod: string
}
