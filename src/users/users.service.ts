import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { PrismaException } from 'src/prisma/exceptions/prisma.exception'
import { JwtService } from '@nestjs/jwt'
import { envs } from 'src/config/envs'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { SignInDto } from './dto/sign-in.dto'
import { IUserSession } from './types/user-session.interface'

@Injectable()
export class UsersService {
  constructor(
    private readonly db: PrismaService,
    private readonly jwt: JwtService,
  ) {}
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

  async signIn({ cod, contraseña }: SignInDto) {
    const user = await this.getOneByEmail({ cod, contraseña })
    if (!user)
      throw new UnauthorizedException('Las credenciales no son válidas')
    const payload: IUserSession = {
      id: user.id,
      usuario: user.nombre,
      cod: user.cod,
      emplid: user.emplid,
      grado: user.grado,
      portal_token: user.token,
    }

    return {
      user: {
        id: user.id,
        usuario: user.nombre,
        cod: user.cod,
      },
      access: await this.jwt.signAsync(payload, {
        secret: envs.jwt,
        expiresIn: '1d',
      }),
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
