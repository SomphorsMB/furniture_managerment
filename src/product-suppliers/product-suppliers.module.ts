import { Module } from '@nestjs/common';
import { ProductSuppliersService } from './product-suppliers.service';
import { ProductSuppliersController } from './product-suppliers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplier } from './entities/product-supplier.entity';
import { ProductSupplierRepository } from './product-suppliers.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSupplier, ProductSupplierRepository])],
  controllers: [ProductSuppliersController],
  providers: [ProductSuppliersService]
})
export class ProductSuppliersModule {}
