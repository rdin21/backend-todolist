import { Task } from './../task/tesk.model';
import { TaskDate } from './date.model';
import { CreateDateDto } from './dto/create-date.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DateService {

    constructor(
        @InjectModel(TaskDate) private dateRepository: typeof  TaskDate
    ){}

    async createDate(dateDto:CreateDateDto): Promise<TaskDate> {
        const date:TaskDate = await this.dateRepository.create(dateDto)
        return date
    }

    async getByDate (date:string): Promise<TaskDate[]> {
        const dateArr: TaskDate[] = await this.dateRepository.findAll({
            where: {date},
            include:[{model: Task}]
        })
        return dateArr
    }

    async checkDate(date:string):Promise<TaskDate> {
        const check = await this.dateRepository.findOne({where: {date}})
        return check
    }

}
