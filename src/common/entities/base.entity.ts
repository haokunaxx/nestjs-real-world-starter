// 实体可以看成存储在数据库表中的数据对象，是面向数据库的
// 基础实体包含：主键id、创建时间、创建人、修改时间、修改人、是否删除、更新版本
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  VersionColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @Column()
  creator: string;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  @Column()
  updater: string;

  @Column({
    default: 0,
    select: false,
    name: 'del_flag',
  })
  delFlag: number;

  @VersionColumn({
    select: false,
  })
  version: number;
}
