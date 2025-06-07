import { ApiHideProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'
export class RequestGradesDto {
  @IsString()
  portal_token: string
  @ApiHideProperty()
  @IsString()
  period: string = '2552'
  @IsString()
  cod: string
}
