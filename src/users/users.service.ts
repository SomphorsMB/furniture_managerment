import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor
  (
    @InjectRepository(User)
    private readonly usersRespository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRespository.create(createUserDto);
    return await this.usersRespository.save(newUser);
  }

  async findAll() {
    return await this.usersRespository.find();
  }

  async findUserByEmail(email: string): Promise<any> {
    return await this.usersRespository.findOne({ email });
  }

  update(userId: string, updateUserDto: UpdateUserDto) {
    return this.usersRespository.update(userId, updateUserDto);
  }
}
