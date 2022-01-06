import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'Иван', description: "Имя пользвотеля"})
    readonly name: string

    @ApiProperty({example: 'Иванов', description: "Фамилия пользвотеля"})
    readonly lastname: string

    @ApiProperty({example: 'user@email.com', description: "Email пользвотеля"})
    readonly email: string

    @ApiProperty({example: '1234567890', description: "Пороль пользвотеля"})
    readonly password: string
}