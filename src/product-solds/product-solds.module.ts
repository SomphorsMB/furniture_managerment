import { Module } from '@nestjs/common';
import { ProductSoldsService } from './product-solds.service';
import { ProductSoldsController } from './product-solds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSold } from './entities/product-sold.entity';
import { ProductSoldRepository } from './product-solds.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ProductSold,ProductSoldRepository])],
  controllers: [ProductSoldsController],
  providers: [ProductSoldsService]
})
export class ProductSoldsModule {}
