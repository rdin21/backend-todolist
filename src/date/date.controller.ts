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
    findOne(@Query() date: any): any {
        const formatDate: string = date.date.split('_').join('.');
        return this.dateService.getByDate(formatDate);
    }

    @ApiOperation({ summary: 'Проверка или создание даты' })
    @ApiResponse({ status: 200, type: TaskDate })
    @Get('/check_date')
    checkDate(@Query() date: any): any {
        const formatDate: string = date.date.split('_').join('.');
        return this.dateService.checkDate(formatDate);
    }
    // @Post()
    // @ApiResponse({status: 200, type:[TaskDate]})
    // create(@Body() dateDto: CreateDateDto): Promise<TaskDate> {
    //     return this.dateService.createDate(dateDto)
    // }
}
