import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDateDto {
    @ApiProperty({ example: '20-02-2000', description: 'Год, месяц, день' })
    @IsString({ message: 'Должно быть строкой' })
    readonly date: string;
}
