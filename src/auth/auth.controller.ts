import { Request } from 'express';
import { Controller, Req, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({
    description: 'Login DTO',
    type: LoginDto,
  })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request) {
    return await this.authService.login(req.user);
  }
}
