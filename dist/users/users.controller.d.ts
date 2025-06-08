import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInDto } from './dto/sign-in.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<{
        cod: string;
        nombre: string;
        token: string;
        id: number;
    }>;
    getAllUsers(): Promise<{
        cod: string;
        nombre: string;
        token: string;
        id: number;
    }[]>;
    getOneUser(dto: SignInDto): Promise<{
        cod: string;
        nombre: string;
        token: string;
        id: number;
    }>;
    updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<{
        cod: string;
        nombre: string;
        token: string;
        id: number;
    }>;
    removeUser(userId: number): Promise<{
        mesage: string;
    }>;
}
