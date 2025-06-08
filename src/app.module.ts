import { Module } from '@nestjs/common'

import { CalendarioModule } from './calendario/calendario.module'
import { PagosModule } from './pagos/pagos.module'
import { NotasModule } from './notas/notas.module'
import { UsersModule } from './users/users.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [
    CalendarioModule,
    PagosModule,
    NotasModule,
    UsersModule,
    PrismaModule,
  ],
})
export class AppModule {}
