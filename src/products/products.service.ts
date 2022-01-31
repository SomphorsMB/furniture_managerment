import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly _productRepository:ProductRepository){}

  create(createProductDto: CreateProductDto) {
    return this._productRepository
      .createQueryBuilder()
      .insert()
      .values({ ...createProductDto})
      .execute();
  }

  findAll() {
    return this._productRepository.createQueryBuilder('product').select(['product']).getMany();
  }

  findOne(id: number) {
    return this._productRepository.createQueryBuilder('product')
    .select(['product'])
    .where('product.id = :id', { id: id})
    .getOne();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this._productRepository.createQueryBuilder()
    .update(new UpdateProductDto)
    .set({ ...updateProductDto })
    .where("id = :id", { id: id })
    .execute();
  }

  remove(id: number) {
    return this._productRepository.createQueryBuilder()
    .delete()
    .from(Product)
    .where("id = :id", { id: id })
    .execute();
  }
}
