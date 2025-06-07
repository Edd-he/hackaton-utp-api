import { Module } from '@nestjs/common'
import { PagosService } from './pagos.service'
import { PagosController } from './pagos.controller'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [PagosController],
  providers: [PagosService],
})
export class PagosModule {}
