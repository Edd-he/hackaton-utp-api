import { Body, Controller, Post } from '@nestjs/common'

import { PagosService } from './pagos.service'
import { RequestPaymentsDto } from './dto/request-payments.dto'

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @Post()
  findAll(@Body() request: RequestPaymentsDto) {
    console.log(request)
    return this.pagosService.getPayments({
      emplid: request.emplid,
      grado: request.grado,
      strm: request.strm,
    })
  }
}
