import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSchema, UserType } from './user.schema';
import { Role } from '../auth/constants';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserSchema)
    private usersRepo: Repository<UserType>,
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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string) {
    const user = this.usersRepo.findOneBy({ email });

    return user;
  }

  findOneByUsername(username: string) {
    return `This action returns a ${username} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
