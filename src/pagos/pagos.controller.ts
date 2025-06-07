import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { PagosService } from './pagos.service'

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @Get()
  findAll() {
    return this.pagosService.getPayments({
      emplid: '00001387717',
      grado: 'PREG',
      strm: '2252',
    })
  }
}
