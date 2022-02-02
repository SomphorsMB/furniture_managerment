import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/entities/category.entity';
import { ProductDetail } from 'src/product-details/entities/product-detail.entity';
import { ProductSold } from 'src/product-solds/entities/product-sold.entity';
import { ProductSupplier } from 'src/product-suppliers/entities/product-supplier.entity';
import { Product } from 'src/products/entities/product.entity';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { Seller } from './entities/seller.entity';
import { SellerRepository } from './sellers.repository';

@Injectable()
export class SellersService {

  constructor(private readonly _sellerRepository:SellerRepository){}

  create(createSellerDto: CreateSellerDto) {
    return this._sellerRepository
        .createQueryBuilder()
        .insert()
        .values({...createSellerDto})
        .execute();
  }

  async findAll() {
    const sellers = await this._sellerRepository.createQueryBuilder('seller')
                            .leftJoinAndMapMany('seller.product_sold', ProductSold, 'productSold', 'seller.id = productSold.sellerId')
                            .leftJoinAndMapMany('productSold.product', Product, 'product', 'product.id = productSold.productId')
                            .leftJoinAndMapMany('product.detail', ProductDetail, 'productDetail', 'product.id = productDetail.productId')
                            .leftJoinAndMapMany('productDetail.supplier', ProductSupplier, 'supplier','productDetail.supplierId = supplier.id')
                            .leftJoinAndMapMany('product.category', Category, 'category','product.categoryId = category.id')
                            .getMany();
    return sellers;
  }

  async findOne(id: number) {
    const seller = await this._sellerRepository.createQueryBuilder('seller')
                          .leftJoinAndMapMany('seller.product_sold', ProductSold, 'productSold', 'seller.id = productSold.sellerId')
                          .leftJoinAndMapMany('productSold.product', Product, 'product', 'product.id = productSold.productId')
                          .leftJoinAndMapMany('product.detail', ProductDetail, 'productDetail', 'product.id = productDetail.productId')
                          .leftJoinAndMapMany('productDetail.supplier', ProductSupplier, 'supplier','productDetail.supplierId = supplier.id')
                          .leftJoinAndMapMany('product.category', Category, 'category','product.categoryId = category.id')
                          .where('seller.id=:id',{id:id})
                          .getOne();
    return seller;
  }

  update(id: number, updateSellerDto: UpdateSellerDto) {
    return this._sellerRepository.createQueryBuilder()
    .update(new UpdateSellerDto)
    .set({...updateSellerDto})
    .where("id=:id",{id:id})
    .execute();
  }

  remove(id: number) {
    return this._sellerRepository.createQueryBuilder()
      .delete()
      .from(Seller)
      .where('id=:id',{id:id})
      .execute();
  }

  checkSeller(seller:UpdateSellerDto){
    return this._sellerRepository
          .createQueryBuilder()
          .select()
          .andWhere('firstName=:firstName',{firstName:seller.firstName})
          .andWhere('lastName=:lastName',{lastName:seller.lastName})
          .andWhere('gender=:gender',{gender:seller.gender})
          .andWhere('phone=:phone',{phone:seller.phone})
          .andWhere('address=:address',{address:seller.address})
          .getOne();

  }

  checkPhone(phone:string){
    return this._sellerRepository
          .createQueryBuilder()
          .select()
          .where('phone=:phone',{phone:phone})
          .getOne();

  }
}
