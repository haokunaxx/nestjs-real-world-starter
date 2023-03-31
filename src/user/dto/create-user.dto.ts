import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/common/dto/base.dto';
import type { GenderEnum, StatusEnum } from '../types';
export class CreateUserDto extends BaseDto {
  @ApiProperty({
    description: '用户名',
    example: '用户',
  })
  userName: string;

  @ApiProperty({
    description: '真实姓名',
  })
  realName: string;

  @ApiProperty({
    description: '密码',
  })
  password: string;

  @ApiProperty({
    description: '性别 0：男 1：女 2：保密',
  })
  gender: GenderEnum;

  @ApiProperty({
    description: '邮箱',
  })
  email: string;

  @ApiProperty({
    description: '手机号',
  })
  mobile: string;

  @ApiProperty({
    description: '状态：0启用 1禁用',
  })
  status: StatusEnum;
}
