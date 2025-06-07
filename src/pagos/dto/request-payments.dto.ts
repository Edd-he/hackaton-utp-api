import { ApiHideProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class RequestPaymentsDto {
  @IsString()
  emplid: string

  @IsString()
  grado: string

  @ApiHideProperty()
  @IsString()
  strm: string = '2552'
}
