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

  async findAll() {
    const bios = await this.biosRepo.find();

    return bios;
  }

  async findOne(uuid: string) {
    const bio = await this.biosRepo.findOneBy({ id: uuid });

    return bio;
  }

  update(uuid: string, updateBioDto: UpdateBioDto) {
    return `This action updates a #${uuid} bio`;
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} bio`;
  }
}
