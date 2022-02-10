import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/entities/category.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { ProductDetail } from 'src/product-details/entities/product-detail.entity';
import { ProductSupplier } from 'src/product-suppliers/entities/product-supplier.entity';
import { Product } from 'src/products/entities/product.entity';
import { Seller } from 'src/sellers/entities/seller.entity';
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

  async findAll() {
    return await this._productSoldRepository
        .createQueryBuilder('productSold')
        .select('productSold')
        .select('seller')
        .select('product')
        .addSelect('productDetail')
        .addSelect('supplier')
        .addSelect('category') 
        .innerJoin(Product, 'product', 'product.id = productSold.productId')
        .innerJoin(Seller, 'seller', 'seller.id = productSold.sellerId')
        .innerJoin(ProductDetail, 'productDetail', 'product.id = productDetail.productId')
        .innerJoin(ProductSupplier, 'supplier', 'productDetail.supplierId = supplier.id')
        .innerJoin(Category, 'category', 'category.id = product.categoryId')
        .orderBy("productSold.id", "DESC")
        .getRawMany()
  }

  async findOne(id: number) {
    return await this._productSoldRepository
        .createQueryBuilder('productSold')
        .select('productSold')
        .select('seller')
        .select('product')
        .addSelect('productDetail')
        .addSelect('supplier')
        .addSelect('category') 
        .innerJoin(Product, 'product', 'product.id = productSold.productId')
        .innerJoin(Seller, 'seller', 'seller.id = productSold.sellerId')
        .innerJoin(ProductDetail, 'productDetail', 'product.id = productDetail.productId')
        .innerJoin(ProductSupplier, 'supplier', 'productDetail.supplierId = supplier.id')
        .innerJoin(Category, 'category', 'category.id = product.categoryId')
        .where('productSold.id=:id',{id:id})
        .getRawMany()
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
