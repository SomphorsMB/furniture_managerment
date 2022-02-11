import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { classToPlain } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor
  (
    private readonly _usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(payload: LoginDto): Promise<any> {
    const user = await this._usersService.findUserByEmail(payload.email);
    if (user) {
      const isMatch = !await bcrypt.compare(payload.password, user.password);
      if (isMatch) {
        throw new UnauthorizedException('Invalid Credentials');
      }
    } else {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }

  async login(payload: LoginDto) {
    const user = await this._usersService.findUserByEmail(payload.email);
    return {
      user,
      access_token: await this.createAccessToken(classToPlain(user))
    }
  }

  async createAccessToken(payload: any){
    return this.jwtService.sign(payload)
  }
}
