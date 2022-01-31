import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() payload: LoginDto
  ) {
    await this.authService.validateUser(payload);
    return this.authService.login(payload);
  }

  @Post('logout')
  async logout(
    @Res({ passthrough: true }) res: Response
  ) {
    res.clearCookie('jwt');
    return {
      message: 'Logged out'
    }
  }
}
