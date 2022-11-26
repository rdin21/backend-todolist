import { User } from 'src/user/user.model';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany, ForeignKey } from 'sequelize-typescript';
import { Task } from 'src/task/task.model';

interface CategoriesCreationAttrs {
    name: string;
    color: string;
}

@Table({ tableName: 'categories' })
export class Categories extends Model<Categories, CategoriesCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Работа', description: 'Имя категории' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: 'Синий', description: 'Название цвета' })
    @Column({ type: DataType.STRING })
    color: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @HasMany(() => Task)
    tasks: Task[];
}
