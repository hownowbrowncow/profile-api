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

  async update(uuid: string, updateBioDto: UpdateBioDto) {
    const bio = await this.biosRepo.save({
      id: uuid,
      ...updateBioDto,
    });

    return bio;
  }

  async remove(uuid: string) {
    await this.biosRepo.delete(uuid);
  }
}
