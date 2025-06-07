import { Module } from '@nestjs/common'
import { NotasService } from './notas.service'
import { NotasController } from './notas.controller'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [NotasController],
  providers: [NotasService],
})
export class NotasModule {}
