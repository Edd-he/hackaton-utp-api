import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { UsersService } from './users.service'
import { UsersController } from './users.controller'

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
