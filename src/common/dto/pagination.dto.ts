import { ApiProperty } from '@nestjs/swagger';
import { Matches, IsOptional } from 'class-validator';

const regEmptyOrPositive = /\s*|^[1,9]\d*$/g;

export class PaginationDto {
  @IsOptional()
  @Matches(regEmptyOrPositive, {
    message: 'page 不可小于 0',
  })
  @ApiProperty({
    description: 'page',
  })
  readonly page?: number;

  @IsOptional()
  @Matches(regEmptyOrPositive, {
    message: 'pageSize 不可小于 0',
  })
  @ApiProperty({
    description: 'pageSize',
  })
  readonly pageSize?: number;

  pages: number;

  total: number;

  records: any;
}
