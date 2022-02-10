import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/entities/category.entity';
import { ProductDetail } from 'src/product-details/entities/product-detail.entity';
import { Product } from 'src/products/entities/product.entity';
import { DiscountRepository } from './discount.repository';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discount } from './entities/discount.entity';
import { Pagination, IPaginationOptions, paginateRaw } from 'nestjs-typeorm-paginate';

@Injectable()
export class DiscountService {
  constructor(private readonly _discountRepository:DiscountRepository){}
  
  create(createDiscountDto: CreateDiscountDto) {
    return this._discountRepository
          .createQueryBuilder()
          .insert()
          .values({...createDiscountDto})
          .execute();
  }

  async findAllDiscount() {
    const productsdiscount = await this._discountRepository.createQueryBuilder('discount')
                            .innerJoinAndMapMany('supplier.detail', ProductDetail, 'productDetail', 'productDetail.id = discount.id')
                            .innerJoinAndMapMany('productDetail.product', Product, 'product', 'product.id = productDetail.productId')
                            .innerJoinAndMapOne('product.category', Category, 'category','category.id = product.categoryId')
                            .getRawMany();
    return productsdiscount;
  }

  async findOne(id: number) {
    const productdiscount = await this._discountRepository.createQueryBuilder('discount')
                            .innerJoinAndMapOne('supplier.detail', ProductDetail, 'productDetail', 'productDetail.id = discount.id')
                            .innerJoinAndMapOne('productDetail.product', Product, 'product', 'product.id = productDetail.productId')
                            .innerJoinAndMapOne('product.category', Category, 'category','category.id = product.categoryId')
                            .where('discount.id=:id',{id:id})
                            .getOne();
    return productdiscount;
  }

  update(id: number, updateDiscountDto: UpdateDiscountDto) {
    return this._discountRepository.createQueryBuilder()
          .update(new UpdateDiscountDto)
          .set({...updateDiscountDto})
          .where("id=:id",{id:id})
          .execute();
  }

  remove(id: number) {
    return this._discountRepository.createQueryBuilder()
          .delete()
          .from(Discount)
          .where('id=:id',{id:id})
          .execute();
  }
}
