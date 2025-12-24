import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    example: 123,
  })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id?: number;
}
