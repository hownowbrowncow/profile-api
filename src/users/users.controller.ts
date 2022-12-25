import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') uuid: string) {
    return await this.usersService.findOne(uuid);
  }

  @Patch(':id')
  async update(
    @Param('id') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(uuid, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') uuid: string) {
    await this.usersService.remove(uuid);
  }
}
