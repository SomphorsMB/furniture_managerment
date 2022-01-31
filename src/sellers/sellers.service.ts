import { Injectable } from '@nestjs/common';
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

  findAll() {
    return this._sellerRepository
    .createQueryBuilder()
    .getMany();
  }

  findOne(id: number) {
    return this._sellerRepository
      .createQueryBuilder('seller')
      .select(['seller'])
      .where('seller.id=:id',{id:id})
      .getOne();
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
