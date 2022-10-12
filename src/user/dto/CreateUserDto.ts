import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'Иван', description: 'Имя пользвотеля' })
    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;

    @ApiProperty({ example: 'Иванов', description: 'Фамилия пользвотеля' })
    @IsString({ message: 'Должно быть строкой' })
    readonly lastname: string;

    @ApiProperty({ example: 'user@email.com', description: 'Email пользвотеля' })
	@IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некоректный email' })
    readonly email: string;

    @ApiProperty({ example: '1234567890', description: 'Пороль пользвотеля' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 20, { message: 'Не меньше, 4 и не больше 20 символов' })
    readonly password: string;
}
