import { IsString } from 'class-validator'

export class RequestCalendarDto {
  @IsString()
  'user-id': string

  @IsString()
  token_class: string

  @IsString()
  date: string
}
