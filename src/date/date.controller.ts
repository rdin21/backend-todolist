import { TaskDate } from './date.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateDateDto } from './dto/create-date.dto';
import { DateService } from './date.service';
import { Controller, Get, Post, Body, Query } from '@nestjs/common';

@ApiTags('Дата')
@Controller('date')
export class DateController {
    constructor(private dateService: DateService) {}
    @ApiOperation({summary: 'Создание даты'})
    @ApiResponse({status: 200, type:TaskDate})
    @Get()
    findOne(@Query() date:any): any {
      console.log(date);
      
      const formatDate:string = date.date.split('_').join('.')
      return this.dateService.getByDate(formatDate)
    }
    // @Post()
    // @ApiResponse({status: 200, type:[TaskDate]})
    // create(@Body() dateDto: CreateDateDto): Promise<TaskDate> {
    //     return this.dateService.createDate(dateDto)
    // }
 
}
