import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  password: string;
}
