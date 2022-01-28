import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>){}

  create(createProductDto: CreateProductDto) {
    return this.productRepository
      .createQueryBuilder()
      .insert()
      .values({ ...createProductDto})
      .execute();
  }

  findAll() {
    return this.productRepository.createQueryBuilder('product').select(['product']).getMany();
  }

  findOne(id: number) {
    return this.productRepository.createQueryBuilder('product')
    .select(['product'])
    .where('product.id = :id', { id: id})
    .getOne();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.createQueryBuilder()
    .update(new UpdateProductDto)
    .set({ ...updateProductDto })
    .where("id = :id", { id: id })
    .execute();
  }

  remove(id: number) {
    return this.productRepository.createQueryBuilder()
    .delete()
    .from(Product)
    .where("id = :id", { id: id })
    .execute();
  }
}
