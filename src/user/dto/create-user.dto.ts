import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  isString,
  IsString,
} from 'class-validator';

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
