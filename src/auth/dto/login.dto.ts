import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String, example: 'admin@localhost' })
  username: string;

  @ApiProperty({ type: String, example: 'password' })
  password: string;
}
