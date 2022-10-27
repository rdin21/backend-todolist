import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from './categories.model';
import { Task } from './../task/tesk.model';
import { CreateCategoriesDto, UpdateCategoryDto } from './dto/categories.dto';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Categories) private categoriesRepository: typeof Categories) {}

    async getAll(): Promise<Categories[]> {
        const allCategories = await this.categoriesRepository.findAll();
        return allCategories;
    }

    async getAllCategoriesAndTask(date: string): Promise<Categories[]> {
        const allCategories = await this.categoriesRepository.findAll({
            include: { model: Task, where: { date } },
        });
        return allCategories;
    }

    async create(categoriesDto: CreateCategoriesDto): Promise<Categories> {
        const checkCategories = await this.categoriesRepository.findOne({ where: { name: categoriesDto.name } });
        if (!checkCategories) {
            const newCategory = await this.categoriesRepository.create(categoriesDto);
            return newCategory;
        }
        throw new HttpException('Такая категория уже есть', HttpStatus.BAD_REQUEST);
    }

    async delete(id: number): Promise<number> {
        const deleteCategories = await this.categoriesRepository.destroy({ where: { id } });
        return deleteCategories;
    }

    async update(dto: UpdateCategoryDto): Promise<[number, Categories[]]> {
        const { id, name, color } = dto;
        const updateCategory = await this.categoriesRepository.update({ name, color }, { where: { id } });
        return updateCategory;
    }
}
