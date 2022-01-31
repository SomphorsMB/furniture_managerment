import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly _categoryRepository:CategoryRepository){}

  create(createCategoryDto: CreateCategoryDto){
    return this._categoryRepository
          .createQueryBuilder()
          .insert()
          .values({...createCategoryDto})
          .execute();
  }

  findAll() {
    return this._categoryRepository
          .createQueryBuilder()
          .getMany();
  }

  findOne(id: number) {
    return this._categoryRepository
          .createQueryBuilder('category')
          .select(['category'])
          .where('category.id=:id',{id:id})
          .getOne();
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto):Promise<any> {
    return this._categoryRepository.createQueryBuilder()
          .update(new UpdateCategoryDto)
          .set({...updateCategoryDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number){
    return this._categoryRepository.createQueryBuilder()
          .delete()
          .from(Category)
          .where('id=:id',{id:id})
          .execute();
  }

  checkCategory(name:string){
    return this._categoryRepository
          .createQueryBuilder()
          .select()
          .where('name=:name',{name:name})
          .getOne();

  }
}
