import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInDto } from './dto/sign-in.dto';
export declare class UsersService {
    private readonly db;
    constructor(db: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        cod: string;
        nombre: string;
        token: string;
        id: number;
    }>;
    findAll(): Promise<{
        cod: string;
        nombre: string;
        token: string;
        id: number;
    }[]>;
    getOneByEmail({ cod, contraseña }: SignInDto): Promise<{
        cod: string;
        nombre: string;
        token: string;
        id: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        cod: string;
        nombre: string;
        token: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        mesage: string;
    }>;
}
