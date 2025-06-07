import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'

import { PagosService } from './pagos.service'
import { PagosController } from './pagos.controller'

@Module({
  imports: [HttpModule],
  controllers: [PagosController],
  providers: [PagosService],
})
export class PagosModule {}
