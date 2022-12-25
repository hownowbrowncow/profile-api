import { ApiProperty } from '@nestjs/swagger';

export class ResponseBioDto {
  @ApiProperty({ type: String, example: 'Admin User' })
  readonly displayName: string;

  @ApiProperty({ type: String, example: 'Some info about stuff yano' })
  readonly info: string;

  @ApiProperty({ type: String, example: 'Master of nothing' })
  readonly title: string;

  @ApiProperty({ type: String, example: 'https://picsum.photos/id/0/400/500' })
  readonly picture: string;

  @ApiProperty({ type: String, example: '2022-12-25T01:11:06.095Z' })
  readonly createdAt: string;

  @ApiProperty({ type: String, example: '2022-12-25T01:11:06.095Z' })
  readonly updatedAt: string;
}
