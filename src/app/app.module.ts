import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { BiosModule } from '../bios/bios.module';
import { defaultConfig } from '../database/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(defaultConfig as TypeOrmModuleOptions),
    UsersModule,
    AuthModule,
    BiosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
