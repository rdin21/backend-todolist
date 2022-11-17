import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'Иван', description: 'Имя пользователя ' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(2, 20, { message: 'Не меньше, 2 и не больше 20 символов' })
    readonly name: string;

    @ApiProperty({ example: 'Иванов', description: 'Фамилия пользователя' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(2, 20, { message: 'Не меньше, 2 и не больше 20 символов' })
    readonly lastname: string;

    @ApiProperty({ example: 'user@email.com', description: 'Email пользователя' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный  email' })
    readonly email: string;

    @ApiProperty({ example: '1234567890', description: 'Пароль пользователя' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 20, { message: 'Не меньше, 4 и не больше 20 символов' })
    readonly password: string;
}
