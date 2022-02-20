import { Task } from './../task/tesk.model';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';

interface TaskDateCreationAttrs {
    date: string;
    // taskId: number
}

@Table({ tableName: 'date' })
export class TaskDate extends Model<TaskDate, TaskDateCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Уникальный индентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: '10.01.2022', description: 'Дата задачи' })
    @Column({ type: DataType.TEXT, allowNull: false })
    date: string;

    @HasMany(() => Task)
    taskDate: TaskDate[];
    // @ForeignKey(() => Task)
    // @Column({type: DataType.INTEGER})
    // taskId: number

    // @BelongsTo(() => Task)
    // task: Task
}
