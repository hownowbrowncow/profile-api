import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { TestCommand } from './test/test.command';
import { CreateUserCommand } from './create/user.command';
import { UsersModule } from '../src/users/users.module';
import { defaultConfig } from '../src/database/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(defaultConfig as TypeOrmModuleOptions),
    UsersModule,
  ],
  providers: [TestCommand, CreateUserCommand],
})
export class AppModule {}
