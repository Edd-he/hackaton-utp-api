import { Module } from '@nestjs/common'
import { CalendarioService } from './calendario.service'
import { CalendarioController } from './calendario.controller'
import { HttpModule } from '@nestjs/axios'
@Module({
  imports: [HttpModule],
  controllers: [CalendarioController],
  providers: [CalendarioService],
})
export class CalendarioModule {}
