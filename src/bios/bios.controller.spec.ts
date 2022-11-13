import { Test, TestingModule } from '@nestjs/testing';
import { BiosController } from './bios.controller';
import { BiosService } from './bios.service';

describe('BiosController', () => {
  let controller: BiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiosController],
      providers: [BiosService],
    }).compile();

    controller = module.get<BiosController>(BiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
