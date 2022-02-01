import { Injectable } from '@nestjs/common';
import { ProductDetail } from 'src/product-details/entities/product-detail.entity';
import { ProductSupplier } from 'src/product-suppliers/entities/product-supplier.entity';
import { Product } from 'src/products/entities/product.entity';
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

  async findAll() {
    const categories = await this._categoryRepository.createQueryBuilder('category')
                            .leftJoinAndMapMany('category.products', Product, 'product', 'product.categoryId = category.id')
                            .leftJoinAndMapMany('product.detail', ProductDetail, 'productDetail', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('productDetail.supplier', ProductSupplier, 'supplier','productDetail.supplierId = supplier.id')
                            .getMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this._categoryRepository.createQueryBuilder('category')
                            .leftJoinAndMapMany('category.products', Product, 'product', 'product.categoryId = category.id')
                            .leftJoinAndMapMany('product.detail', ProductDetail, 'productDetail', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('productDetail.supplier', ProductSupplier, 'supplier','productDetail.supplierId = supplier.id')
                            .where('category.id=:id',{id:id})
                            .getOne();
    return category;
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
