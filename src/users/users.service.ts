import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Role } from '../auth/constants';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(createUserDto.password, 10);
    const user = this.usersRepo.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hash,
      roles: [Role.Admin, Role.User],
    });

    await this.usersRepo.save(user);

    return user;
  }

  async findAll() {
    return await this.usersRepo.find();
  }

  async findOne(uuid: string) {
    return await this.usersRepo.findOneBy({ id: uuid });
  }

  async findByEmail(email: string) {
    return await this.usersRepo.findOneBy({ email });
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    return await this.usersRepo.save({ id: uuid, ...updateUserDto });
  }

  async remove(uuid: string) {
    await this.usersRepo.delete({ id: uuid });
  }
}
