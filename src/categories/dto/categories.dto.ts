import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoriesDto {
    @ApiProperty({ example: 'Работа', description: 'Название категории' })
    readonly name: string;
    @ApiProperty({ example: 'Синий', description: 'цвет категории' })
    readonly color: string;
}

export class UpdateCategoryDto {
    @ApiProperty({ example: 22, description: 'Уникальный идентификатор' })
    readonly id: number;
    @ApiProperty({ example: 'Здоровье' })
    readonly name: string;
    @ApiProperty({ example: 'Синий', description: 'Цвет категории' })
    readonly color: string;
}
