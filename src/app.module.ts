import { AppService } from './app.service';
import {  Module } from "@nestjs/common";
import {ConfigModule} from '@nestjs/config'
import { SequelizeModule } from "@nestjs/sequelize";
import {ApiController} from './app.controller'
import { UserModule } from './user/user.module';


@Module({
    controllers: [ApiController],
    providers: [AppService],
    imports:[
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            //Модели данных в базе данных
            models: [],
            //Автоматическое создание моделей
            autoLoadModels: true
        }),
        UserModule,
        // Все модули, пример UserModule
    ],
})
export class AppModule{}