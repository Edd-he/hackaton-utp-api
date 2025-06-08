"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_exception_1 = require("../prisma/exceptions/prisma.exception");
const jwt_1 = require("@nestjs/jwt");
const envs_1 = require("../config/envs");
let UsersService = class UsersService {
    constructor(db, jwt) {
        this.db = db;
        this.jwt = jwt;
    }
    async create(createUserDto) {
        try {
            const user = await this.db.user.create({
                omit: { contraseña: true },
                data: createUserDto,
            });
            return user;
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al crear el usuario');
        }
    }
    async findAll() {
        return this.db.user.findMany({
            omit: {
                contraseña: true,
            },
        });
    }
    async getOneByEmail({ cod, contraseña }) {
        return await this.db.user.findFirst({
            omit: {
                contraseña: true,
            },
            where: {
                cod,
                contraseña,
            },
        });
    }
    async update(id, updateUserDto) {
        try {
            const updatedUser = await this.db.user.update({
                where: {
                    id,
                },
                data: {
                    ...updateUserDto,
                },
                omit: { contraseña: true },
            });
            return updatedUser;
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al actualizar el usuario');
        }
    }
    async signIn({ cod, contraseña }) {
        const user = await this.getOneByEmail({ cod, contraseña });
        if (!user)
            throw new common_1.UnauthorizedException('Las credenciales no son válidas');
        const payload = {
            id: user.id,
            usuario: user.nombre,
            cod: user.cod,
            emplid: user.emplid,
            grado: user.grado,
            portal_token: user.token,
        };
        return {
            user: {
                id: user.id,
                usuario: user.nombre,
                cod: user.cod,
            },
            access: await this.jwt.signAsync(payload, {
                secret: envs_1.envs.jwt,
                expiresIn: '1d',
            }),
        };
    }
    async remove(id) {
        try {
            await this.db.user.delete({
                where: {
                    id,
                },
            });
            return { mesage: 'usuario-removido' };
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al archivar el usuario');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map