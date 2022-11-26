import { CreateTaskDto, UpdateTaskDto, UpdateStatusDto, DeleteTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Controller, Delete, Body, Post, Put, Patch } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './task.model';

@ApiTags('Задачи')
@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @ApiOperation({ summary: 'Создание новой задачи' })
    @ApiResponse({ status: 200, type: Task })
    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskService.create(createTaskDto);
    }

    @ApiOperation({ summary: 'Удаление задачи' })
    @ApiResponse({ status: 200, type: Number })
    @Delete()
    delete(@Body('id') id: DeleteTaskDto): Promise<number> {
        return this.taskService.delete(id);
    }

    @ApiOperation({ summary: 'Обновление текста задачи' })
    @ApiResponse({ status: 200, type: Number })
    @Put()
    update(@Body() updateTaskDto: UpdateTaskDto): Promise<[number, Task[]]> {
        return this.taskService.update(updateTaskDto);
    }

    @ApiOperation({ summary: 'Обновление статуса задачи, с выполненного и наоборот' })
    @ApiResponse({ status: 200, type: Number })
    @Patch()
    updateStatus(@Body() updateStatusDto: UpdateStatusDto): Promise<[number, Task[]]> {
        return this.taskService.updateStatus(updateStatusDto);
    }
}
