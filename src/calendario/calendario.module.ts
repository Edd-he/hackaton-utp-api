import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'

import { CalendarioService } from './calendario.service'
import { CalendarioController } from './calendario.controller'
@Module({
  imports: [HttpModule],
  controllers: [CalendarioController],
  providers: [CalendarioService],
})
export class CalendarioModule {}
