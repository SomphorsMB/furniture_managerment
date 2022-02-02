import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { ProductDetail } from 'src/product-details/entities/product-detail.entity';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductSupplierDto } from './dto/create-product-supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product-supplier.dto';
import { ProductSupplier } from './entities/product-supplier.entity';
import { ProductSupplierRepository } from './product-suppliers.repository';

@Injectable()
export class ProductSuppliersService {
  constructor(private readonly _supplierRepository: ProductSupplierRepository){}

  create(createProductSupplierDto: CreateProductSupplierDto) {
    return this._supplierRepository
      .createQueryBuilder()
      .insert()
      .values({ ...createProductSupplierDto})
      .execute();
  }

  async findAll() {
    const suppliers = await this._supplierRepository.createQueryBuilder('supplier')
                            .leftJoinAndMapMany('supplier.detail', ProductDetail, 'productDetail', 'productDetail.supplierId = supplier.id')
                            .leftJoinAndMapMany('productDetail.product', Product, 'product', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('product.category', Category, 'category','category.id = product.categoryId')
                            .getMany();
    return suppliers;
  }

  async findOne(id: number) {
    const supplier = await this._supplierRepository.createQueryBuilder('supplier')
                            .leftJoinAndMapMany('supplier.detail', ProductDetail, 'productDetail', 'productDetail.supplierId = supplier.id')
                            .leftJoinAndMapMany('productDetail.product', Product, 'product', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('product.category', Category, 'category','category.id = product.categoryId')
                            .where('supplier.id = :id', { id: id})
                            .getOne();
    return supplier;
  }

  update(id: number, updateProductSupplierDto: UpdateProductSupplierDto) {
    return this._supplierRepository.createQueryBuilder()
    .update(new UpdateProductSupplierDto)
    .set({ ...updateProductSupplierDto })
    .where("id = :id", { id: id })
    .execute();
    
  }

  remove(id: number) {
    return this._supplierRepository.createQueryBuilder()
    .delete()
    .from(ProductSupplier)
    .where("id = :id", { id: id })
    .execute();
  }
}
