import { TaskDate } from './../date/date.model';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { Categories } from 'src/categories/categories.model';

interface TaskCreationAttrs {
    date: string;
    text: string;
    time: string;
    userId: number;
    categoriesID: number;
    taskDateId: string;
}

@Table({ tableName: 'task' })
export class Task extends Model<Task, TaskCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Lorem ipsum', description: 'Дата задачи' })
    @Column({ type: DataType.STRING, allowNull: false })
    date: string;

    @ApiProperty({ example: 'Lorem ipsum', description: 'Текст задачи' })
    @Column({ type: DataType.TEXT, allowNull: false })
    text: string;

    @ApiProperty({ example: '20.05', description: 'Время' })
    @Column({ type: DataType.STRING, allowNull: false })
    time: string;

    @ApiProperty({ example: 'true', description: 'Статус выполнения' })
    @Column({ type: DataType.BOOLEAN })
    status: boolean;

    @ApiProperty({ example: '10', description: 'Уникальный идентификатор пользователя' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @ForeignKey(() => Categories)
    @Column({ type: DataType.INTEGER })
    categoriesID: number;

    @BelongsTo(() => Categories)
    categories: Task;

    @ForeignKey(() => TaskDate)
    @Column({ type: DataType.INTEGER })
    taskDateId: string;

    @BelongsTo(() => TaskDate)
    dates: Task;
}
