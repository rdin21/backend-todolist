import { Task } from './../task/tesk.model';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: 'Иванов', description: 'Фамилия пользователя' })
    @Column({ type: DataType.STRING })
    lastname: string;

    @ApiProperty({ example: 'user@email.com', description: 'Email пользователя' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: '1234567890', description: 'Пароль пользователя' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @HasMany(() => Task)
    tasks: Task[];
}
