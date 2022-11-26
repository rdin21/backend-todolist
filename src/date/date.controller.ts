import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetTaskByDate, CheckDate } from './dto/create-date.dto';
import { TaskDate } from './date.model';
import { DateService } from './date.service';

@ApiTags('Дата')
@Controller('date')
export class DateController {
    constructor(private dateService: DateService) {}
    @ApiOperation({ summary: 'Создание даты' })
    @ApiResponse({ status: 200, type: TaskDate })
    @Get()
    findOne(@Query() date: GetTaskByDate): Promise<TaskDate[]> {
        const formatDate: string = date.date.split('_').join('.');
        const userId = date.userId;
        return this.dateService.getByDate(formatDate, userId);
    }

    @ApiOperation({ summary: 'Проверка или создание даты' })
    @ApiResponse({ status: 200, type: TaskDate })
    @Get('/check_date')
    checkDate(@Query() date: CheckDate): Promise<TaskDate> {
        const formatDate: string = date.date.split('_').join('.');
        return this.dateService.checkDate(formatDate);
    }
}
