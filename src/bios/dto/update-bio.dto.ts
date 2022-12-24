import { PartialType, ApiProperty } from '@nestjs/swagger';

import { CreateBioDto } from './create-bio.dto';

export class UpdateBioDto extends PartialType(CreateBioDto) {
  @ApiProperty({ type: String, example: 'Admin User' })
  readonly displayName: string;
  @ApiProperty({ type: String, example: 'Some info about stuff yano' })
  readonly info: string;
  @ApiProperty({ type: String, example: 'Master of nothing' })
  readonly title: string;
  @ApiProperty({ type: String, example: 'https://picsum.photos/id/0/400/500' })
  readonly picture: string;
}
