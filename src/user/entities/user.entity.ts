import { Base } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import type { GenderEnum, StatusEnum } from '../types';
@Entity('user')
export class User extends Base {
  @Column({
    name: 'user_name',
  })
  userName: string;

  @Column({
    name: 'real_name',
  })
  realName: string;

  @Column()
  password: string;

  @Column()
  gender: GenderEnum;

  @Column()
  email: string;

  @Column()
  mobile: string;

  @Column({
    default: 0,
  })
  status: StatusEnum;
}
