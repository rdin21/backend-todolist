import { Categories } from './categories.model';
import { CreateCategoriesDto, UpdateCategoryDto } from './dto/categories.dto';
import { CategoriesService } from './categories.service';
import { Body, Controller, Delete, Post, Get, Query, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Категории')
@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}
    @ApiOperation({ summary: 'Вернуть все категории' })
    @ApiResponse({ status: 200, type: [Categories] })
    @Get()
    getAll(): Promise<Categories[]> {
        return this.categoriesService.getAll();
    }

    @ApiOperation({ summary: 'Вернуть все категории и задачи' })
    @ApiResponse({ status: 200, type: [Categories] })
    @Get('all_task')
    getAllCategoriesAndTask(@Query() data: { date: string }): Promise<Categories[]> {
        const { date } = data;
        return this.categoriesService.getAllCategoriesAndTask(date);
    }

    @ApiOperation({ summary: 'Создание категории' })
    @ApiResponse({ status: 200, type: Categories })
    @Post()
    create(@Body() categoriesDto: CreateCategoriesDto): Promise<Categories> {
        return this.categoriesService.create(categoriesDto);
    }

    @ApiOperation({ summary: 'Удаление категории' })
    @ApiResponse({ status: 200, type: Number })
    @ApiParam({ name: 'id', required: true, description: 'id', schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] } })
    @Delete()
    delete(@Body('id') id: number): Promise<number> {
        return this.categoriesService.delete(id);
    }

    @ApiOperation({ summary: 'Обновление категории' })
    @ApiResponse({ status: 200, type: UpdateCategoryDto })
    @Put()
    update(@Body() dto: UpdateCategoryDto) {
        return this.categoriesService.update(dto);
    }
}
