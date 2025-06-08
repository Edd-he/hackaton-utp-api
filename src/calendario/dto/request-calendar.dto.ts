import { ApiHideProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class RequestCalendarDto {
  @ApiHideProperty()
  @IsOptional()
  @IsString()
  'user-id': string

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  portal_token: string

  @IsString()
  date: string

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  period: string = '2252'

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  cod: string
}
