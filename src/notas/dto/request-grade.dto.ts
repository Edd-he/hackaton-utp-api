import { ApiHideProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'
export class RequestGradesDto {
  @IsString()
  course_id: string
  @ApiHideProperty()
  @IsOptional()
  @IsString()
  portal_token: string
  @ApiHideProperty()
  @IsString()
  period: string = '2552'
  @ApiHideProperty()
  @IsOptional()
  @IsString()
  cod: string
}
