import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Req, Res, Patch, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor
    (
      private readonly usersService: UsersService,
      private jwtService: JwtService
    ) { }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);
    const email = await this.usersService.findEmail(createUserDto.email);
    if (email) {
      throw new HttpException('The email has already been taken !', HttpStatus.CONFLICT)
    }
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = await this.usersService.findEmail(email);
    console.log(user);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    if (!await bcrypt.compare(password, user.password)) {
      throw new BadRequestException('Invalid credentials');
    }
    const jwt = await this.jwtService.signAsync({ id: user.id });
    res.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'You log in as: ' + user.role
    };
  }

  @Post('logout')
  async logout(
    @Res({ passthrough: true }) res: Response
  ) {
    res.clearCookie('jwt');
    return {
      message: 'Log out successfully'
    }
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Patch('update/:userId')
  update(@Param('userId') userId: string, @Req() req: Request, @Res() res: Response) {
    this.usersService.update(userId, req.body)
      .then(() => {
        res.status(200).json(
          {
            message: 'User has been updated successfully',
            user: req.body,
          }
        )
      })
      .catch(err => {
        return res.status(500).json(
          {
            message: 'Internal server error, user cannot be updated!',
            error: err
          }
        )
      })
  }
}
