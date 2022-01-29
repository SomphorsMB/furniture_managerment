import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Repository } from 'typeorm';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { Seller } from './entities/seller.entity';

@Injectable()
export class SellersService {

  constructor(@InjectRepository(Seller) private readonly sellerRepository:Repository<Seller>){}

  create(createSellerDto: CreateSellerDto) {
    return this.sellerRepository
        .createQueryBuilder()
        .insert()
        .values({...createSellerDto})
        .execute();
  }

  findAll() {
    return this.sellerRepository
    .createQueryBuilder()
    .getMany();
  }

  findOne(id: number) {
    return this.sellerRepository
      .createQueryBuilder('seller')
      .select(['seller'])
      .where('seller.id=:id',{id:id})
      .getOne();
  }

  update(id: number, updateSellerDto: UpdateSellerDto) {
    return this.sellerRepository.createQueryBuilder()
    .update(new UpdateSellerDto)
    .set({...updateSellerDto})
    .where("id=:id",{id:id})
    .execute();
  }

  remove(id: number) {
    return this.sellerRepository.createQueryBuilder()
      .delete()
      .from(Seller)
      .where('id=:id',{id:id})
      .execute();
  }

  checkSeller(seller:CreateSellerDto){
    return this.sellerRepository
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
    return this.sellerRepository
          .createQueryBuilder()
          .select()
          .where('phone=:phone',{phone:phone})
          .getOne();

  }
}
