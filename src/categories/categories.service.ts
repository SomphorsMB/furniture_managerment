import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private readonly categoryRepository:Repository<Category>){}

  create(createCategoryDto: CreateCategoryDto){
    return this.categoryRepository
          .createQueryBuilder()
          .insert()
          .values({...createCategoryDto})
          .execute();
  }

  findAll() {
    return this.categoryRepository
          .createQueryBuilder()
          .getMany();
  }

  findOne(id: number) {
    return this.categoryRepository
          .createQueryBuilder('category')
          .select(['category'])
          .where('category.id=:id',{id:id})
          .getOne();
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto):Promise<any> {
    return this.categoryRepository.createQueryBuilder()
          .update(new UpdateCategoryDto)
          .set({...updateCategoryDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number){
    return this.categoryRepository.createQueryBuilder()
          .delete()
          .from(Category)
          .where('id=:id',{id:id})
          .execute();
  }

  checkCategory(name:string){
    return this.categoryRepository
          .createQueryBuilder()
          .select()
          .where('name=:name',{name:name})
          .getOne();

  }
}
