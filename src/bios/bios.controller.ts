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
  async create(@Body() createBioDto: CreateBioDto) {
    return await this.biosService.create(createBioDto);
  }

  @Get()
  async findAll() {
    return await this.biosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') uuid: string) {
    return await this.biosService.findOne(uuid);
  }

  @Patch(':id')
  async update(@Param('id') uuid: string, @Body() updateBioDto: UpdateBioDto) {
    return await this.biosService.update(uuid, updateBioDto);
  }

  @Delete(':id')
  async remove(@Param('id') uuid: string) {
    await this.biosService.remove(uuid);

    return { ok: true };
  }
}
