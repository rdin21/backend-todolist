import { User } from './../user/user.model';
import { LoginUserDto } from './../user/dto/login-user.dto';
import { CreateUserDto } from './../user/dto/CreateUserDto';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CheckUser } from './auth.decorator';

@ApiTags("Авторизация")
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('/login')
    async login(@Body() loginUserDto: LoginUserDto):Promise<{access_token: string}>{
        return await this.authService.login(loginUserDto)
    }

    @Post('registration')
    async registration(@Body() userDto: CreateUserDto):Promise<{access_token: string}>{
        return await this.authService.registration(userDto)
    }

    @Get("auth")
    async auth(@CheckUser() user:User):Promise<{access_token: string}> {
        return await this.authService.check(user.email) 
    }
}
