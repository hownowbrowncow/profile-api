import { PartialType } from '@nestjs/swagger';
import { CreateBioDto } from './create-bio.dto';

export class UpdateBioDto extends PartialType(CreateBioDto) {}
