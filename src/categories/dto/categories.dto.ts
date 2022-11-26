import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsInt } from 'class-validator';
export class CreateCategoriesDto {
    @ApiProperty({ example: 'Работа', description: 'Название категории' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(3, 30, { message: 'Не меньше 3 и не больше 30' })
    readonly name: string;

    @ApiProperty({ example: 'Синий', description: 'цвет категории' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 30, { message: 'Не меньше 1 и не больше 30' })
    readonly color: string;

    @ApiProperty({ example: 56, description: 'Id пользователя ' })
    @IsInt()
    readonly userId: number;
}

export class UpdateCategoryDto {
    @ApiProperty({ example: 22, description: 'Уникальный идентификатор' })
    @IsInt()
    readonly id: number;

    @ApiProperty({ example: 'Здоровье' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(3, 30, { message: 'Не меньше 3 и не больше 30' })
    readonly name: string;

    @ApiProperty({ example: 'Синий', description: 'Цвет категории' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(3, 30, { message: 'Не меньше 3 и не больше 30' })
    readonly color: string;
}
export class GetAllCategoriesAndTaskQuery {
    @ApiProperty({ example: '20-02-2000', description: 'Год, месяц, день' })
    @IsString({ message: 'Должно быть строкой' })
    readonly date: string;

    @ApiProperty({ example: 56, description: 'Id пользователя ' })
    readonly userId: number;
}
