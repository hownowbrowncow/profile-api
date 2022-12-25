import { ApiProperty } from '@nestjs/swagger';

import { Role } from '../../auth/constants';

export class ResponseUserDto {
  @ApiProperty({
    type: String,
    example: '4eab3e64-0509-41aa-805d-c3b42fc69674',
  })
  readonly id: string;

  @ApiProperty({ type: String, example: 'Foo Bar' })
  readonly name: string;

  @ApiProperty({ type: String, example: 'admin@localhost' })
  readonly email: string;

  @ApiProperty({ type: Array<Role>, example: [Role.User, Role.Admin] })
  readonly roles: Array<Role>;

  @ApiProperty({ type: String, example: '2022-12-25T01:11:06.095Z' })
  readonly createdAt: string;

  @ApiProperty({ type: String, example: '2022-12-25T01:11:06.095Z' })
  readonly updatedAt: string;
}
