import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';

@ApiTags('users')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    description: 'Create a new user',
    type: ResponseUserDto,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({
    description: 'Fetch all users.',
    type: ResponseUserDto,
    isArray: true,
  })
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    description: 'Fetch user by id.',
    type: ResponseUserDto,
  })
  async findOne(@Param('id') uuid: string) {
    return await this.usersService.findOne(uuid);
  }

  @Patch(':id')
  @ApiResponse({
    description: 'Patch a user by id.',
    type: ResponseUserDto,
  })
  async update(
    @Param('id') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(uuid, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({
    description: 'Delete a user by id.',
  })
  async remove(@Param('id') uuid: string) {
    await this.usersService.remove(uuid);
  }
}
