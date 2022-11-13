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

import { BiosService } from './bios.service';
import { CreateBioDto } from './dto/create-bio.dto';
import { UpdateBioDto } from './dto/update-bio.dto';

@ApiTags('bios')
@Controller('bios')
export class BiosController {
  constructor(private readonly biosService: BiosService) {}

  @Post()
  create(@Body() createBioDto: CreateBioDto) {
    return this.biosService.create(createBioDto);
  }

  @Get()
  findAll() {
    return this.biosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBioDto: UpdateBioDto) {
    return this.biosService.update(+id, updateBioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biosService.remove(+id);
  }
}
