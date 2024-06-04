import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Rahib',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'rahibrza@gmail.com',
  })
  email: string;
}
