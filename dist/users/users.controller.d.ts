import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInDto } from './dto/sign-in.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<{
        cod: string;
        token: string;
        emplid: string;
        grado: string;
        nombre: string;
        id: number;
    }>;
    getAllUsers(): Promise<{
        cod: string;
        token: string;
        emplid: string;
        grado: string;
        nombre: string;
        id: number;
    }[]>;
    getOneUser(dto: SignInDto): Promise<{
        user: {
            id: number;
            usuario: string;
            cod: string;
        };
        access: string;
    }>;
    updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<{
        cod: string;
        token: string;
        emplid: string;
        grado: string;
        nombre: string;
        id: number;
    }>;
    removeUser(userId: number): Promise<{
        mesage: string;
    }>;
}
