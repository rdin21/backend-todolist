import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetTaskByDate {
    @ApiProperty({ example: '20-02-2000', description: 'Год, месяц, день' })
    @IsString({ message: 'Должно быть строкой' })
    readonly date: string;

    @ApiProperty({ example: 2, description: 'Id пользователя ' })
    readonly userId: number;
}

export class CheckDate {
    @ApiProperty({ example: '20-02-2000', description: 'Год, месяц, день' })
    @IsString({ message: 'Должно быть строкой' })
    readonly date: string;
}
