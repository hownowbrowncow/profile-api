import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ type: String })
  readonly name: string;

  @ApiProperty({ type: String })
  readonly email: string;

  @ApiProperty({ type: String })
  readonly password: string;
}
