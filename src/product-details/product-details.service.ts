import { Injectable } from '@nestjs/common';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { UpdateProductDetailDto } from './dto/update-product-detail.dto';
import { ProductDetail } from './entities/product-detail.entity';
import { ProductDetailRepository } from './product-details-repository';

@Injectable()
export class ProductDetailsService {

  constructor(private readonly _productDetailRepository:ProductDetailRepository){}

  create(createProductDetailDto: CreateProductDetailDto) {
    return this._productDetailRepository
      .createQueryBuilder()
      .insert()
      .values({...createProductDetailDto})
      .execute();
  }

  findAll() {
    return this._productDetailRepository
      .createQueryBuilder()
      .getMany();
  }

  findOne(id: number) {
    return this._productDetailRepository
      .createQueryBuilder('productDetail')
      .select('productDetail')
      .where("productDetail.id=:id",{id:id})
      .getOne();
  }

  update(id: number, updateProductDetailDto: UpdateProductDetailDto) {
    return this._productDetailRepository
      .createQueryBuilder()
      .update()
      .set({...updateProductDetailDto})
      .where("id=:id",{id:id})
      .execute();
  }

  remove(id: number) {
    return this._productDetailRepository
      .createQueryBuilder()
      .delete()
      .from(ProductDetail)
      .where("id=:id",{id:id})
      .execute();
  }
}
