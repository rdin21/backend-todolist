import { LoginUserDto } from './../user/dto/login-user.dto';
import { CreateUserDto } from './../user/dto/CreateUserDto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Авторизация")
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('/login')
    login(@Body() loginUserDto: LoginUserDto){
        return this.authService.login(loginUserDto)
    }

    @Post('registration')
    registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto)
    }
}
