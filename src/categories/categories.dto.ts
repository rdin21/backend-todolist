import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoriesDto{
    @ApiProperty({example: 'Работа', description: "Название категории"})
    readonly name:string
    @ApiProperty({example: 'Синий', description: "цвет категории"})
    readonly color:string
}