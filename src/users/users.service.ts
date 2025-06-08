import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { PrismaException } from 'src/prisma/exceptions/prisma.exception'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { SignInDto } from './dto/sign-in.dto'

@Injectable()
export class UsersService {
  constructor(private readonly db: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.db.user.create({
        omit: { contraseña: true },
        data: createUserDto,
      })

      return user
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e)
      }
      throw new InternalServerErrorException(
        'Hubo un error al crear el usuario',
      )
    }
  }

  async findAll() {
    return this.db.user.findMany({
      omit: {
        contraseña: true,
      },
    })
  }

  async getOneByEmail({ cod, contraseña }: SignInDto) {
    return await this.db.user.findFirst({
      omit: {
        contraseña: true,
      },
      where: {
        cod,
        contraseña,
      },
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.db.user.update({
        where: {
          id,
        },
        data: {
          ...updateUserDto,
        },
        omit: { contraseña: true },
      })

      return updatedUser
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e)
      }
      throw new InternalServerErrorException(
        'Hubo un error al actualizar el usuario',
      )
    }
  }

  async remove(id: number) {
    try {
      await this.db.user.delete({
        where: {
          id,
        },
      })

      return { mesage: 'usuario-removido' }
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e)
      }
      throw new InternalServerErrorException(
        'Hubo un error al archivar el usuario',
      )
    }
  }
}
