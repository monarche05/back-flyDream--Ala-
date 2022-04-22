import { Controller, Get, Param, Post, Body, Res } from '@nestjs/common';
import { LoginDto } from './login.dto';

@Controller('login')
export class LoginController {
  @Post()
  async login(@Body() loginDto: LoginDto) {}
}
