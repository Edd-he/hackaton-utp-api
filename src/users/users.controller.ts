import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { SignInDto } from './dto/sign-in.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create-user')
  @ApiOperation({
    summary: 'Crea un usuario del sistema',
  })
  async createUser(@Body() createUserDto: CreateUserDto) {
    const admin = await this.usersService.create(createUserDto)
    return admin
  }

  @Get('get-all-users')
  @ApiOperation({
    summary: 'Obtiene todos los usuarios',
  })
  async getAllUsers() {
    return this.usersService.findAll()
  }

  @Post('iniciar-sesion')
  @ApiOperation({
    summary: 'Iniciar Sesion',
  })
  async getOneUser(@Body() dto: SignInDto) {
    return this.usersService.signIn(dto)
  }

  @Patch(':userId/update-user')
  @ApiOperation({
    summary: 'Actualiza la información de un usuario',
  })
  async updateUser(
    @Param('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const admin = await this.usersService.update(userId, updateUserDto)
    return admin
  }

  @Delete(':userId/remove-user')
  @ApiOperation({
    summary: 'Archiva un usuario',
  })
  async removeUser(@Param('userId') userId: number) {
    const admin = await this.usersService.remove(userId)
    return admin
  }
}
