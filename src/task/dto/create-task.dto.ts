import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsBoolean, Length } from 'class-validator';
export class CreateTaskDto {
    @ApiProperty({ example: '01_01_2001', description: 'дата' })
    @IsString({ message: 'Должно быть строкой' })
    readonly date: string;

    @ApiProperty({ example: 'Сходить в магазин', description: 'текст' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 200, { message: 'Не меньше 1 и не больше 200' })
    readonly text: string;

    @ApiProperty({ example: '12:00', description: 'время' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(2, 6, { message: 'Длина времени должна быть равно 5' })
    readonly time: string;

    @ApiProperty({ example: 'true', description: 'Статус выполнения' })
    readonly status?: boolean;

    @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
    @IsInt({ message: 'Должно быть числом' })
    readonly categoriesID: number;

    @ApiProperty({ example: '1', description: 'ID задачи' })
    @IsInt({ message: 'Должно быть числом' })
    readonly taskDateId: number;

    @ApiProperty({ example: '1', description: 'ID пользователя' })
    @IsInt({ message: 'Должно быть числом' })
    readonly userId: number;
}

export class UpdateTaskDto {
    @ApiProperty({ example: '1', description: 'ID пользователя' })
    @IsInt({ message: 'Должно быть числом' })
    readonly id: number;

    @ApiProperty({ example: 'Сходить в магазин', description: 'текст' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 200, { message: 'Не меньше 1 и не больше 200' })
    readonly text: string;
}

export class UpdateStatusDto {
    @ApiProperty({ example: '1', description: 'ID пользователя' })
    @IsInt({ message: 'Должно быть числом' })
    readonly id: number;

    @ApiProperty({ example: 'True, false', description: 'Выполнена задача?' })
    @IsBoolean({ message: 'Должно быть true или false' })
    readonly status: boolean;
}

export class DeleteTaskDto {
    @ApiProperty({ example: '1', description: 'ID пользователя' })
    @IsInt({ message: 'Должно быть числом' })
    readonly id: number;
}
