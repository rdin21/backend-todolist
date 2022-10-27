import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsInt } from 'class-validator';
export class CreateCategoriesDto {
    @ApiProperty({ example: 'Работа', description: 'Название категории' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(3, 30, { message: 'Не меньше 3 и не больше 30' })
    readonly name: string;

    @ApiProperty({ example: 'Синий', description: 'цвет категории' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(3, 30, { message: 'Не меньше 3 и не больше 30' })
    readonly color: string;
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
