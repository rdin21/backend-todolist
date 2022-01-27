import { CreateCategoriesDto } from './categories.dto';
import { CategoriesService } from './categories.service';
import { Body, Controller, Delete, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Категории')
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    @Get()
    getAll() {
        return this.categoriesService.getAll()
    }

    @Get('all_task')
    getAllCategoriesAndTask() {
        return this.categoriesService.getAllCategoriesAndTask()
    }

    @Post() 
    create(@Body() categoriesDto:CreateCategoriesDto) {
        return this.categoriesService.create(categoriesDto)
    }

    @Delete()
    delete(@Body("id") id:number) {
        return this.categoriesService.delete(id)
    }

}
 