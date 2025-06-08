import { ApiHideProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class RequestPaymentsDto {
  @ApiHideProperty()
  @IsOptional()
  @IsString()
  emplid: string

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  grado: string

  @ApiHideProperty()
  @IsString()
  strm: string = '2552'
}
