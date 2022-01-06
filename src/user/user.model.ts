import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string,
    password:string,
}


@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({ example: 1, description: 'Уникальный индентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number 
    
    @ApiProperty({example: 'Иван', description: 'Имя пользвотеля'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty({example: "Иванов", description: 'Фамилия пользвотеля'})
    @Column({type: DataType.STRING})
    lastname: string

    @ApiProperty({example: "user@email.com", description: 'Email пользвотеля'})
    @Column({type:DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: '1234567890', description: 'Пороль пользвотеля'})
    @Column({type:DataType.STRING, allowNull: false})
    password: string

}