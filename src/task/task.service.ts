import { CreateDateDto } from './../date/dto/create-date.dto';
import { DateService } from './../date/date.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tesk.model';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task) private taskRepository: typeof Task,
        private dateService: DateService
        ){}
    async create(createTaskDto:CreateTaskDto) {
        const date = createTaskDto.date.split('_').join('.')
        const checkDate = await this.dateService.checkDate(date)
        if(checkDate) {
            const newTask = await this.taskRepository.create({...createTaskDto, taskDateId: String(checkDate.id)})
            return newTask
        } else {
            const obj : CreateDateDto = {
                date
            }
            const dateId = await this.dateService.createDate(obj)
            const newTask = await this.taskRepository.create({...createTaskDto, taskDateId: String(dateId.id)})
            return newTask
        }
    }
    async update(updateTaskDto: UpdateTaskDto){
        const {id, text} = updateTaskDto
        const updateTask = await this.taskRepository.update(
            {text},
            {where: {id}}
        )
        return updateTask
    }
    async delete(id: number){
        const deleteTask = await this.taskRepository.destroy({where: {id}})
        return deleteTask
    }
}
