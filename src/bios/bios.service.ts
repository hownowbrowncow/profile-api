import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBioDto } from './dto/create-bio.dto';
import { UpdateBioDto } from './dto/update-bio.dto';
import { Bio } from './entities/bio.entity';

@Injectable()
export class BiosService {
  constructor(
    @InjectRepository(Bio)
    private biosRepo: Repository<Bio>,
  ) {}

  async create(createBioDto: CreateBioDto) {
    const bio = this.biosRepo.create(createBioDto);

    await this.biosRepo.save(bio);

    return bio;
  }

  findAll() {
    return `This action returns all bios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bio`;
  }

  update(id: number, updateBioDto: UpdateBioDto) {
    return `This action updates a #${id} bio`;
  }

  remove(id: number) {
    return `This action removes a #${id} bio`;
  }
}
