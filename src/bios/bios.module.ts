import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Bio } from './entities/bio.entity';
import { BiosService } from './bios.service';
import { BiosController } from './bios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bio])],
  exports: [BiosService],
  controllers: [BiosController],
  providers: [BiosService],
})
export class BiosModule {}
