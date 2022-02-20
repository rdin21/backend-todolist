import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateTaskDto {
    @ApiProperty({ example: '01_01_2001', description: 'дата' })
    @IsString({ message: 'Должно быть строкой' })
    readonly date: string;

    @ApiProperty({ example: 'Сходить в магазин', description: 'текст' })
    @IsString({ message: 'Должно быть строкой' })
    readonly text: string;

    @ApiProperty({ example: '12:00', description: 'время' })
    readonly time: string;

    @ApiProperty({ example: 'true', description: 'Статус выполнения' })
    readonly status?: boolean;

    @ApiProperty({ example: 'Иван', description: 'Имя пользвотеля' })
    readonly categoriesID: number;

    @ApiProperty({ example: '1', description: 'ID задачи' })
    readonly taskDateId: number;

    @ApiProperty({ example: '1', description: 'ID пользвотеля' })
    readonly userId: number;
}

export class UpdateTaskDto {
    @ApiProperty({ example: '1', description: 'ID пользвотеля' })
    readonly id: number;

    @ApiProperty({ example: 'Сходить в магазин', description: 'текст' })
    readonly text: string;
}

export class UpdateStatusDto {
    @ApiProperty({ example: '1', description: 'ID пользвотеля' })
    readonly id: number;

    @ApiProperty({ example: 'True, false', description: 'Выполнена задача?' })
    readonly status: boolean;
}
