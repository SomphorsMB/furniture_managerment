import { Module } from '@nestjs/common';
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ProductSuppliersModule } from './product-suppliers/product-suppliers.module';
import { ProductSupplier } from './product-suppliers/entities/product-supplier.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { ProductDetailController } from './product-detail/product-detail.controller';
import { ProductDetailService } from './product-detail/product-detail.service';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProductDetailModule } from './product-detail/product-detail.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    timezone: process.env.DB_Time,
    synchronize: true,
    entities: [User, ProductSupplier, Product],
  }), UsersModule, ProductSuppliersModule, ProductsModule, ProductDetailModule],
  controllers: [ProductDetailController],
  providers: [ProductDetailService],
})
export class AppModule {}
