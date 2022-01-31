import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Req, Res, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Response, Request } from 'express';
import { AuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('users')
export class UsersController {
  constructor
    (
      private readonly usersService: UsersService,
    ) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);
    const email = await this.usersService.findUserByEmail(createUserDto.email);
    if (email) {
      throw new HttpException('The email has already been taken !', HttpStatus.CONFLICT)
    }
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
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
