import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { TestCommand } from './test/test.command';
import { CreateUserCommand } from './create/user.command';
import { CreateBioCommand } from './create/bio.command';
import { UsersModule } from '../src/users/users.module';
import { BiosModule } from '../src/bios/bios.module';
import { defaultConfig } from '../src/database/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(defaultConfig as TypeOrmModuleOptions),
    UsersModule,
    BiosModule,
  ],
  providers: [TestCommand, CreateUserCommand, CreateBioCommand],
})
export class AppModule {}
