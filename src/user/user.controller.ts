import { CreateUserDto } from './dto/CreateUserDto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';

@ApiTags('Пользвотель')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @ApiOperation({ summary: 'Создание пользвотеля' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }
    @ApiOperation({ summary: 'Получение все пользвотелей' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    getAll() {
        return this.userService.getAllUser();
    }
}
