import { Module } from '@nestjs/common';
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSuppliersModule } from './product-suppliers/product-suppliers.module';
import { ProductSupplier } from './product-suppliers/entities/product-supplier.entity';

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
    entities: [ProductSupplier],
  }), ProductSuppliersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
