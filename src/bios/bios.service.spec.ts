import { Test, TestingModule } from '@nestjs/testing';
import { BiosService } from './bios.service';

describe('BiosService', () => {
  let service: BiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiosService],
    }).compile();

    service = module.get<BiosService>(BiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
