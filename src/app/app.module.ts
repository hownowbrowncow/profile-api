import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const typeormConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'profile_api',
  entities: [],
  synchronize: false,
});

@Module({
  imports: [typeormConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
