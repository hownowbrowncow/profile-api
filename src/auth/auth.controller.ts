import { Request } from 'express';
import { Controller, Req, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { JwtGuard } from './guards/jwt.guard';
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

  @ApiBody({
    description: 'Auth',
  })
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('auth')
  async auth(@Req() req: Request) {
    return req.user;
  }
}
