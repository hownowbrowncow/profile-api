import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { LoginDto } from './dto/login.dto';

@ApiTags('app')
@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() loginDto: LoginDto) {
    return loginDto;
  }
}
