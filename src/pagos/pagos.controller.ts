/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get } from '@nestjs/common'
import { UserSession } from 'src/users/decorators/user-session.decorator'
import { IUserSession } from 'src/users/types/user-session.interface'
import { Auth } from 'src/users/decorators/auth.decorator'
import { ApiBearerAuth } from '@nestjs/swagger'

import { PagosService } from './pagos.service'
import { RequestPaymentsDto } from './dto/request-payments.dto'

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @ApiBearerAuth()
  @Auth()
  @Get('/obtener-pagos')
  findAll(@UserSession() session: IUserSession) {
    console.warn(session)
    return this.pagosService.getPayments()
  }
}
