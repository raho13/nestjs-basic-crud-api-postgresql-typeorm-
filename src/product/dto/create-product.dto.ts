import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 't-shirt',
  })
  name: string;

  @ApiProperty({
    example: 'userId',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
