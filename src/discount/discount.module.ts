import { Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discount } from './entities/discount.entity';
import { DiscountRepository } from './discount.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Discount,DiscountRepository])],
  controllers: [DiscountController],
  providers: [DiscountService]
})
export class DiscountModule {}
