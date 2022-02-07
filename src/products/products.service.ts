import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { ProductDetail } from 'src/product-details/entities/product-detail.entity';
import { ProductSupplier } from 'src/product-suppliers/entities/product-supplier.entity';
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

  async findAll(): Promise<Product[]> {
    return await this._productRepository
        .createQueryBuilder('product')
        .select('product')
        .addSelect('productDetail')
        .addSelect('supplier')
        .addSelect('category')
        .addSelect('discount')
        .innerJoin(ProductDetail, 'productDetail', 'product.id = productDetail.productId')
        .innerJoin(ProductSupplier, 'supplier', 'productDetail.supplierId = supplier.id')
        .innerJoin(Category, 'category', 'category.id = product.categoryId')
        .leftJoin(Discount, 'discount', 'productDetail.id = discount.productId')
        .orderBy("productDetail.id", "DESC")
        .getRawMany()
  }

  async findOne(id: number) {
    return await this._productRepository
        .createQueryBuilder('product')
        .select('product')
        .addSelect('productDetail')
        .addSelect('supplier')
        .addSelect('category')
        .addSelect('discount')
        .innerJoin(ProductDetail, 'productDetail', 'product.id = productDetail.productId')
        .innerJoin(ProductSupplier, 'supplier', 'productDetail.supplierId = supplier.id')
        .innerJoin(Category, 'category', 'category.id = product.categoryId')
        .leftJoin(Discount, 'discount', 'productDetail.id = discount.productId')
        .where('product.id = '+ id)
        .orderBy("productDetail.id", "DESC")
        .getRawMany()
  }

  async getProductDiscount(): Promise<Product[]> {
    return await this._productRepository
        .createQueryBuilder('product')
        .select('product')
        .addSelect('productDetail')
        .addSelect('supplier')
        .addSelect('category')
        .addSelect('discount')
        .innerJoin(ProductDetail, 'productDetail', 'product.id = productDetail.productId')
        .innerJoin(ProductSupplier, 'supplier', 'productDetail.supplierId = supplier.id')
        .innerJoin(Category, 'category', 'category.id = product.categoryId')
        .innerJoin(Discount, 'discount', 'productDetail.id = discount.productId')
        .orderBy("discount.id", "DESC")
        .getRawMany()
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