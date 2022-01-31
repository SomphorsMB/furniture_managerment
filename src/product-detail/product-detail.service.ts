import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { UpdateProductDetailDto } from './dto/update-product-detail.dto';
import { ProductDetail } from './entities/product-detail.entity';

@Injectable()
export class ProductDetailService {
  constructor(@InjectRepository(ProductDetail) private readonly productDetailRepository: Repository<ProductDetail>){}

  create(createProductDetailDto: CreateProductDetailDto)
  {

  }

  findAll()
  {
    return this.productDetailRepository.createQueryBuilder('productDetail').select(['productDetail']).getMany();
  }

  findOne(id: number)
  {
    return this.productDetailRepository.createQueryBuilder('productDetail')
      .select(['productDetail'])
      .where('productDetail.id = :id', { id: id })
      .getOne();
  }

  update(id: number, updateProductDetailDto: UpdateProductDetailDto)
  {
    return this.productDetailRepository.createQueryBuilder()
      .update(new UpdateProductDetailDto)
      .set({ ...updateProductDetailDto })
      .where("id = :id", { id: id })
  }

  remove(id: number)
  {
    return this.productDetailRepository.createQueryBuilder()
      .delete()
      .from(ProductDetail)
      .where("id = :id", { id: id })
      .execute();
  }
}
