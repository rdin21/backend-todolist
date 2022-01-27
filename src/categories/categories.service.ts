import { CreateCategoriesDto } from './categories.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from './categories.model';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectModel(Categories) private categoriesRepository: typeof Categories,
        ){}

    async getAll(): Promise<Categories[]>{
        const allCategories = await this.categoriesRepository.findAll()
        return allCategories
    }

    async getAllCategoriesAndTask() : Promise<Categories[]>{
        const allCategories = await this.categoriesRepository.findAll({include: {all: true}})
        return allCategories
    }
    
    async create(categoriesDto: CreateCategoriesDto):Promise<Categories> {
        const checkCategories = await this.categoriesRepository.findOne({where: {name: categoriesDto.name}})
        if(!checkCategories) {
            const newCategory = await this.categoriesRepository.create(categoriesDto)
            return newCategory
        }
        throw new HttpException("Такая категория уже есть", HttpStatus.BAD_REQUEST)
    }

    async delete(id: number) {
        const deleteCategories = await this.categoriesRepository.destroy({where: {id}})
        return deleteCategories
    }

}
 