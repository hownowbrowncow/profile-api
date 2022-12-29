import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BiosService } from './bios.service';
import { CreateBioDto } from './dto/create-bio.dto';
import { ResponseBioDto } from './dto/response-bio.dto';
import { UpdateBioDto } from './dto/update-bio.dto';

@ApiTags('bios')
@Controller('bios')
export class BiosController {
  constructor(private readonly biosService: BiosService) {}

  @Post()
  @ApiResponse({
    description: 'Create a bio.',
    type: ResponseBioDto,
  })
  async create(@Body() createBioDto: CreateBioDto) {
    return await this.biosService.create(createBioDto);
  }

  @Get()
  @ApiResponse({
    description: 'Get all bios. (There should be only one)',
    type: ResponseBioDto,
    isArray: true,
  })
  async findAll() {
    return await this.biosService.findAll();
  }

  @Get('/first')
  @ApiResponse({
    description: 'Get first bio.',
    type: ResponseBioDto,
  })
  async findFirst() {
    return await this.biosService.findFirst();
  }

  @Get(':id')
  @ApiResponse({
    description: 'Get a bio by id.',
    type: ResponseBioDto,
  })
  async findOne(@Param('id') uuid: string) {
    return await this.biosService.findOne(uuid);
  }

  @Patch(':id')
  @ApiResponse({
    description: 'Patch a bio by id.',
    type: ResponseBioDto,
  })
  async update(@Param('id') uuid: string, @Body() updateBioDto: UpdateBioDto) {
    return await this.biosService.update(uuid, updateBioDto);
  }

  @Delete(':id')
  async remove(@Param('id') uuid: string) {
    await this.biosService.remove(uuid);

    return { ok: true };
  }
}
