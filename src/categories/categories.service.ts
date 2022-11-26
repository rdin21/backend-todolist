import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from './categories.model';
import { Task } from '../task/task.model';
import { CreateCategoriesDto, UpdateCategoryDto, GetAllCategoriesAndTaskQuery } from './dto/categories.dto';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Categories) private categoriesRepository: typeof Categories) {}

    async getAll(userId: number): Promise<Categories[]> {
        const allCategories = await this.categoriesRepository.findAll({
            where: { userId },
        });
        return allCategories;
    }

    async getAllCategoriesAndTask(query: GetAllCategoriesAndTaskQuery): Promise<Categories[]> {
        const { date, userId } = query;
        const allCategories = await this.categoriesRepository.findAll({
            include: { model: Task, where: { date, userId } },
        });
        return allCategories;
    }

    async create(categoriesDto: CreateCategoriesDto): Promise<Categories> {
        const { name, userId } = categoriesDto;
        const checkCategories = await this.categoriesRepository.findOne({ where: { name } });

        if (checkCategories) {
            if (checkCategories.name === name && checkCategories.userId === userId) {
                throw new HttpException('Такая категория уже есть!!', HttpStatus.BAD_REQUEST);
            } else {
                const newCategory = await this.categoriesRepository.create(categoriesDto);
                return newCategory;
            }
        }

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
