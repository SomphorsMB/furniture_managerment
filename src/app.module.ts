import { Module } from '@nestjs/common';
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [Category],
  }), CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
