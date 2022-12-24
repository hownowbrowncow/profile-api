import { Command, CommandRunner } from 'nest-commander';
import { Injectable } from '@nestjs/common';

import { UsersService } from '../../src/users/users.service';

@Injectable()
@Command({ name: 'createUser', description: 'Create a user' })
export class CreateUserCommand extends CommandRunner {
  constructor(private usersService: UsersService) {
    super();
  }

  async run(): Promise<void> {
    await this.createUser();
  }

  async createUser(): Promise<void> {
    await this.usersService.create({
      name: 'admin',
      email: 'admin@localhost',
      password: 'password',
    });
  }
}
