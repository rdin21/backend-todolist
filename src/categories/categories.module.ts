import { Task } from 'src/task/tesk.model';
import { CategoriesService } from './categories.service';
import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Categories } from './categories.model';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [SequelizeModule.forFeature([Categories])], 

})
export class CategoriesModule {}
