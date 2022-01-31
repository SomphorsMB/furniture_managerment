import { Module } from '@nestjs/common';
import { ProductDetailsService } from './product-details.service';
import { ProductDetailsController } from './product-details.controller';
import { ProductDetail } from './entities/product-detail.entity';
import { ProductDetailRepository } from './product-details-repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ProductDetail,ProductDetailRepository])],
  controllers: [ProductDetailsController],
  providers: [ProductDetailsService]
})
export class ProductDetailsModule {}
