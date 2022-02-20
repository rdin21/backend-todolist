import { TaskDate } from './date.model';
import { Task } from './../task/tesk.model';
import { Module } from '@nestjs/common';
import { DateService } from './date.service';
import { DateController } from './date.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    providers: [DateService],
    controllers: [DateController],
    imports: [SequelizeModule.forFeature([TaskDate, Task])],
    exports: [DateService],
})
export class DateModule {}
