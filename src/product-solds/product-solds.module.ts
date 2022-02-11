import { Module } from '@nestjs/common';
import { ProductSoldsService } from './product-solds.service';
import { ProductSoldsController } from './product-solds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSold } from './entities/product-sold.entity';
import { ProductSoldRepository } from './product-solds.repository';
import { ProductDetailsService } from 'src/product-details/product-details.service';
import { ProductDetail } from 'src/product-details/entities/product-detail.entity';
import { ProductDetailRepository } from 'src/product-details/product-details-repository';

@Module({
  imports:[TypeOrmModule.forFeature([ProductSold,ProductSoldRepository]), TypeOrmModule.forFeature([ProductDetail,ProductDetailRepository])],
  controllers: [ProductSoldsController],
  providers: [ProductSoldsService, ProductDetailsService]
})
export class ProductSoldsModule {}
