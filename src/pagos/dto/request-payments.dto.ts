import { IsString } from 'class-validator'

export class RequestPaymentsDto {
  @IsString()
  emplid: string
  @IsString()
  grado: string
  @IsString()
  strm: string
}
