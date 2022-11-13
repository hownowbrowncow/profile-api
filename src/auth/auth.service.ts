import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    const isMatch = user && (await bcrypt.compare(password, user.password));

    if (isMatch) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
