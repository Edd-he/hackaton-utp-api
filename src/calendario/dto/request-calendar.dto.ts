import { IsString } from 'class-validator'

export class RequestCalendarDto {
  @IsString()
  'user-id': string

  @IsString()
  portal_token: string

  @IsString()
  date: string

  @IsString()
  period: string

  @IsString()
  cod: string
}
