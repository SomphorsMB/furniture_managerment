import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  findAll() {
    return this._supplierRepository.createQueryBuilder('supplier')
    .select(['supplier'])
    .getMany();
  }

  findOne(id: number) {
    return this._supplierRepository.createQueryBuilder('supplier')
    .select(['supplier'])
    .where('supplier.id = :id', { id: id})
    .getOne();
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
