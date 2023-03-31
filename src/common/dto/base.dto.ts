import { ApiHideProperty } from '@nestjs/swagger';

export class BaseDto {
  readonly createTime: Date;

  creator: string;

  readonly updateTime: Date;

  updater: string;

  @ApiHideProperty()
  delFlag: number;

  @ApiHideProperty()
  version: number;
}
