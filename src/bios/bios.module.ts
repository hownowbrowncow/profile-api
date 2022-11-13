import { Module } from '@nestjs/common';
import { BiosService } from './bios.service';
import { BiosController } from './bios.controller';

@Module({
  controllers: [BiosController],
  providers: [BiosService]
})
export class BiosModule {}
