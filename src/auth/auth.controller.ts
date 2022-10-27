import { User } from './../user/user.model';
import { LoginUserDto } from './../user/dto/login-user.dto';
import { CreateUserDto } from './../user/dto/CreateUserDto';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CheckUser } from './auth.decorator';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @ApiOperation({ summary: 'Авторизация пользователя' })
    @ApiOkResponse({ description: 'Return user access_token' })
    @Post('/login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
        return await this.authService.login(loginUserDto);
    }

    @ApiOperation({ summary: 'Регистрация пользователя' })
    @ApiOkResponse({ description: 'Return user access_token' })
    @Post('registration')
    async registration(@Body() userDto: CreateUserDto): Promise<{ access_token: string }> {
        return await this.authService.registration(userDto);
    }

    @ApiOperation({ summary: 'Проверка пользователя' })
    @ApiOkResponse({ description: 'Return user access_token' })
    @Get('auth')
    async auth(@CheckUser() user: User): Promise<{ access_token: string }> {
        return await this.authService.check(user.email);
    }
}
