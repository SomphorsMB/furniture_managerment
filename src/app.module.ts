import { Module } from '@nestjs/common';
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ProductSuppliersModule } from './product-suppliers/product-suppliers.module';
import { ProductSupplier } from './product-suppliers/entities/product-supplier.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { SellersModule } from './sellers/sellers.module';
import { Seller } from './sellers/entities/seller.entity';
import { ProductSoldsModule } from './product-solds/product-solds.module';
import { ProductSold } from './product-solds/entities/product-sold.entity';
import { ProductDetailsModule } from './product-details/product-details.module';
import { MulterModule } from '@nestjs/platform-express';
import { ProductDetail } from './product-details/entities/product-detail.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './authorization/role.guard';
import { DiscountModule } from './discount/discount.module';
import { Discount } from './discount/entities/discount.entity';
import { ProductCartModule } from './product-cart/product-cart.module';
import { ProductCart } from './product-cart/entities/product-cart.entity';


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
    entities: [User, ProductSupplier, Product,Category,Seller,ProductSold,ProductDetail, Discount, ProductCart],
  }), UsersModule, ProductSuppliersModule, ProductsModule,CategoriesModule, SellersModule,SellersModule, ProductSoldsModule, ProductDetailsModule,AuthModule,MulterModule.register({
    dest:'./files',
  }), DiscountModule, ProductCartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
