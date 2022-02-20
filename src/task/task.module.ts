import { DateModule } from './../date/date.module';
import { TaskDate } from './../date/date.model';
import { Task } from './tesk.model';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    providers: [TaskService],
    controllers: [TaskController],
    imports: [SequelizeModule.forFeature([Task, TaskDate]), DateModule],
    exports: [TaskService],
})
export class TaskModule {}
