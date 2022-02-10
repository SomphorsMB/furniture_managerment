import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/entities/category.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { ProductDetail } from 'src/product-details/entities/product-detail.entity';
import { ProductSupplier } from 'src/product-suppliers/entities/product-supplier.entity';
import { Product } from 'src/products/entities/product.entity';
import { CreateProductCartDto } from './dto/create-product-cart.dto';
import { UpdateProductCartDto } from './dto/update-product-cart.dto';
import { ProductCart } from './entities/product-cart.entity';
import { ProductCartRepository } from './productCart.repository';

@Injectable()
export class ProductCartService {
  constructor(private readonly _productCateRepository:ProductCartRepository){}
  create(createProductCartDto: CreateProductCartDto) {
    return this._productCateRepository
          .createQueryBuilder()
          .insert()
          .values({...createProductCartDto})
          .execute();
  }

  async findAll() {
    return await this._productCateRepository
        .createQueryBuilder('productCart')
        .select('productCart')
        .addSelect('product')
        .addSelect('productDetail')
        .addSelect('supplier')
        .addSelect('category') 
        .addSelect('discount') 
        .innerJoin(ProductDetail, 'productDetail', 'productDetail.id = productCart.productId')
        .innerJoin(Product, 'product', 'product.id = productDetail.productId')
        .innerJoin(ProductSupplier, 'supplier', 'productDetail.supplierId = supplier.id')
        .innerJoin(Category, 'category', 'category.id = product.categoryId')
        .leftJoin(Discount, 'discount', 'productDetail.id = discount.productId')
        .orderBy("productCart.id", "DESC")
        .getRawMany()
  }

  async findOne(id: number) {
    return await this._productCateRepository
    .createQueryBuilder("cart")
    .where("cart.productId = :id", { id: id })
    .getOne();
  }

  update(id: number, updateProductCartDto: UpdateProductCartDto) {
    return this._productCateRepository
      .createQueryBuilder()
      .update()
      .set({...updateProductCartDto})
      .where('id=:id',{id:id})
      .execute();
  }

  remove(id: number) {
    return this._productCateRepository
      .createQueryBuilder()
      .delete()
      .from(ProductCart)
      .where('id=:id',{id:id})
      .execute();
  }
}
