import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Controller, Delete, Body, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Задачи")
@Controller('task')
export class TaskController {

    constructor(
        private taskService: TaskService
    
        ){}

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto)
    }
     
    @Delete()
    delete(@Body('id') id: number) {
        return this.taskService.delete(id)
    }

    @Put()
    update(@Body() updateTaskDto: UpdateTaskDto) {
        return this.taskService.update(updateTaskDto)
    }

}
