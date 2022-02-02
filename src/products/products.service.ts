import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
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
    const products = await this._productRepository.createQueryBuilder('product')
                            .leftJoinAndMapMany('product.detail', ProductDetail, 'productDetail', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('productDetail.supplier', ProductSupplier, 'supplier','productDetail.supplierId = supplier.id')
                            .leftJoinAndMapMany('product.category', Category, 'category','product.categoryId = category.id')
                            .getMany();
    return products;
  }

  async findOne(id: number) {
    const product = await this._productRepository.createQueryBuilder('product')
                            .leftJoinAndMapMany('product.detail', ProductDetail, 'productDetail', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('productDetail.supplier', ProductSupplier, 'supplier','productDetail.supplierId = supplier.id')
                            .leftJoinAndMapMany('product.category', Category, 'category','product.categoryId = category.id')
                            .where('product.id = :id', { id: id})
                            .getOne();
   return product;
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
