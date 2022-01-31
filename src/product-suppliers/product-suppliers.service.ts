import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductSupplierDto } from './dto/create-product-supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product-supplier.dto';
import { ProductSupplier } from './entities/product-supplier.entity';

@Injectable()
export class ProductSuppliersService {
  constructor(@InjectRepository(ProductSupplier) private readonly supplierRepository: Repository<ProductSupplier>){}

  create(createProductSupplierDto: CreateProductSupplierDto) {
    return this.supplierRepository
      .createQueryBuilder()
      .insert()
      .values({ ...createProductSupplierDto})
      .execute();
  }

  findAll() {
    return this.supplierRepository.createQueryBuilder('supplier')
    .select(['supplier'])
    .getMany();
  }

  async findOne(id: number) {
    return this.supplierRepository.createQueryBuilder('supplier')
    .select(['supplier'])
    .where('supplier.id = :id', { id: id})
    .getOne();
  }

  update(id: number, updateProductSupplierDto: UpdateProductSupplierDto) {
    return this.supplierRepository.createQueryBuilder()
    .update(new UpdateProductSupplierDto)
    .set({ ...updateProductSupplierDto })
    .where("id = :id", { id: id })
    .execute();
    
  }

  remove(id: number) {
    return this.supplierRepository.createQueryBuilder()
    .delete()
    .from(ProductSupplier)
    .where("id = :id", { id: id })
    .execute();
  }
}
