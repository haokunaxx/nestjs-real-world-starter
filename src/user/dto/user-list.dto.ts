import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class UserListDto extends PaginationDto {
  @ApiProperty({ description: '用户名', required: false })
  userName?: string;
}
