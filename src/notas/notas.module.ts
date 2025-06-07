import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'

import { NotasService } from './notas.service'
import { NotasController } from './notas.controller'

@Module({
  imports: [HttpModule],
  controllers: [NotasController],
  providers: [NotasService],
})
export class NotasModule {}
