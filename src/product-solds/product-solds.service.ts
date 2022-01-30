import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductSoldDto } from './dto/create-product-sold.dto';
import { UpdateProductSoldDto } from './dto/update-product-sold.dto';
import { ProductSold } from './entities/product-sold.entity';

@Injectable()
export class ProductSoldsService {
  constructor(@InjectRepository(ProductSold) private readonly productSoldRepository:Repository<ProductSold>){}
  create(createProductSoldDto: CreateProductSoldDto) {
    return this.productSoldRepository
      .createQueryBuilder()
      .insert()
      .values({...createProductSoldDto})
      .execute();
  }

  findAll() {
    return this.productSoldRepository
      .createQueryBuilder()
      .getMany();
  }

  findOne(id: number) {
    return this.productSoldRepository
      .createQueryBuilder('productSold')
      .select('productSold')
      .where('productSold.id=:id',{id:id})
      .getOne();
  }

  update(id: number, updateProductSoldDto: UpdateProductSoldDto) {
    return this.productSoldRepository
      .createQueryBuilder()
      .update()
      .set({...updateProductSoldDto})
      .where('id=:id',{id:id})
      .execute();
  }

  remove(id: number) {
    return this.productSoldRepository
      .createQueryBuilder()
      .delete()
      .from(ProductSold)
      .where('id=:id',{id:id})
      .execute();
  }
}
