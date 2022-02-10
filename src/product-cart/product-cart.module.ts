import { Module } from '@nestjs/common';
import { ProductCartService } from './product-cart.service';
import { ProductCartController } from './product-cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCart } from './entities/product-cart.entity';
import { ProductCartRepository } from './productCart.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCart,ProductCartRepository])],
  controllers: [ProductCartController],
  providers: [ProductCartService]
})
export class ProductCartModule {}
