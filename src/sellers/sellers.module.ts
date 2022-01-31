import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { SellerRepository } from './sellers.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Seller,SellerRepository])],
  controllers: [SellersController],
  providers: [SellersService]
})
export class SellersModule {}
