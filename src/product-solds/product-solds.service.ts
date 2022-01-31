import { Injectable } from '@nestjs/common';
import { CreateProductSoldDto } from './dto/create-product-sold.dto';
import { UpdateProductSoldDto } from './dto/update-product-sold.dto';
import { ProductSold } from './entities/product-sold.entity';
import { ProductSoldRepository } from './product-solds.repository';

@Injectable()
export class ProductSoldsService {
  constructor(private readonly _productSoldRepository:ProductSoldRepository){}
  create(createProductSoldDto: CreateProductSoldDto) {
    return this._productSoldRepository
      .createQueryBuilder()
      .insert()
      .values({...createProductSoldDto})
      .execute();
  }

  findAll() {
    return this._productSoldRepository
      .createQueryBuilder()
      .getMany();
  }

  findOne(id: number) {
    return this._productSoldRepository
      .createQueryBuilder('productSold')
      .select('productSold')
      .where('productSold.id=:id',{id:id})
      .getOne();
  }

  update(id: number, updateProductSoldDto: UpdateProductSoldDto) {
    return this._productSoldRepository
      .createQueryBuilder()
      .update()
      .set({...updateProductSoldDto})
      .where('id=:id',{id:id})
      .execute();
  }

  remove(id: number) {
    return this._productSoldRepository
      .createQueryBuilder()
      .delete()
      .from(ProductSold)
      .where('id=:id',{id:id})
      .execute();
  }
}
