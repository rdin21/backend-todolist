import { TaskDate } from './date/date.model';
import { Task } from './task/tesk.model';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiController } from './app.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { User } from './user/user.model';
import { DateModule } from './date/date.module';
import { CategoriesModule } from './categories/categories.module';
import { Categories } from './categories/categories.model';

@Module({
    controllers: [ApiController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            //Модели данных в базе данных
            models: [User, Task, TaskDate, Categories],
            //Автоматическое создание моделей
            // autoLoadModels: true
        }),
        UserModule,
        AuthModule,
        TaskModule,
        DateModule,
        CategoriesModule,
        // Все модули, пример UserModule
    ],
})
export class AppModule {}
