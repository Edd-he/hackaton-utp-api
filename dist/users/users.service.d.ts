import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInDto } from './dto/sign-in.dto';
export declare class UsersService {
    private readonly db;
    private readonly jwt;
    constructor(db: PrismaService, jwt: JwtService);
    create(createUserDto: CreateUserDto): Promise<{
        cod: string;
        token: string;
        emplid: string;
        grado: string;
        nombre: string;
        id: number;
    }>;
    findAll(): Promise<{
        cod: string;
        token: string;
        emplid: string;
        grado: string;
        nombre: string;
        id: number;
    }[]>;
    getOneByEmail({ cod, contraseña }: SignInDto): Promise<{
        cod: string;
        token: string;
        emplid: string;
        grado: string;
        nombre: string;
        id: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        cod: string;
        token: string;
        emplid: string;
        grado: string;
        nombre: string;
        id: number;
    }>;
    signIn({ cod, contraseña }: SignInDto): Promise<{
        user: {
            id: number;
            usuario: string;
            cod: string;
        };
        access: string;
    }>;
    remove(id: number): Promise<{
        mesage: string;
    }>;
}
