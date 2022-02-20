import { CreateUserDto } from './dto/CreateUserDto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    async createUser(dto: CreateUserDto) {
        const { password, name, lastname } = dto;

        if (typeof password !== 'string') {
            throw new HttpException('Недействительный пароль', HttpStatus.BAD_REQUEST);
        }
        if (typeof name !== 'string') {
            throw new HttpException('Имя не строка', HttpStatus.BAD_REQUEST);
        }
        if (typeof lastname !== 'string') {
            throw new HttpException('Фамилия не строка', HttpStatus.BAD_REQUEST);
        }

        const user = await this.userModel.create(dto);
        return user;
    }
    async getAllUser() {
        const users = await this.userModel.findAll({ include: { all: true } });
        return users;
    }
    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({
            where: { email },
            include: { all: true },
        });
        return user;
    }
}
