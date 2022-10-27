import { CreateDateDto } from './dto/create-date.dto';
import { TaskDate } from './date.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DateService } from './date.service';
import { Controller, Get, Query } from '@nestjs/common';

@ApiTags('Дата')
@Controller('date')
export class DateController {
    constructor(private dateService: DateService) {}
    @ApiOperation({ summary: 'Создание даты' })
    @ApiResponse({ status: 200, type: TaskDate })
    @Get()
    findOne(@Query() date: CreateDateDto): Promise<TaskDate[]> {
        const formatDate: string = date.date.split('_').join('.');
        return this.dateService.getByDate(formatDate);
    }

    @ApiOperation({ summary: 'Проверка или создание даты' })
    @ApiResponse({ status: 200, type: TaskDate })
    @Get('/check_date')
    checkDate(@Query() date: CreateDateDto): Promise<TaskDate> {
        const formatDate: string = date.date.split('_').join('.');
        return this.dateService.checkDate(formatDate);
    }
}
