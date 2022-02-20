import { LoginUserDto } from './../user/dto/login-user.dto';
import { CreateUserDto } from './../user/dto/CreateUserDto';
import { UserService } from './../user/user.service';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { User } from 'src/user/user.model';
@Injectable()
export class AuthService {
    public constructor(private userService: UserService, private jwtService: JwtService) {}

    public async login(userDto: LoginUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    public async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
        }
        const hashPassword: string = await hash(userDto.password, 5);
        const user: User = await this.userService.createUser({
            ...userDto,
            password: hashPassword,
        });
        return this.generateToken(user);
    }

    public async check(email: string) {
        const user = await this.userService.getUserByEmail(email);
        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = { email: user.email, id: user.id, name: user.name, lastname: user.lastname };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (user) {
            const passwordEquals = await compare(userDto.password, user.password);
            if (passwordEquals) return user;
        }
        throw new HttpException('Неверный email и пароль', HttpStatus.BAD_REQUEST);
    }
}

//npm i bcrypt
//npm i @types/bcrypt
