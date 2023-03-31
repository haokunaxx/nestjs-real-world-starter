import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { User } from './entities/user.entity';
import { UserListDto } from './dto/user-list.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    createUserDto.creator = 'admin';
    createUserDto.updater = 'admin';
    await this.userRepository.save(createUserDto);
  }

  async findAll(userListDto: UserListDto): Promise<PaginationDto> {
    const { page = 1, pageSize = 10, userName = '' } = userListDto;
    const records = await this.userRepository.find({
      where: {
        userName: Like(`%${userName}%`),
        delFlag: 0,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      order: {
        createTime: 'DESC',
      },
    });
    const total = await this.userRepository.count({
      where: {
        userName: Like(`%${userName}%`),
        delFlag: 0,
      },
    });
    return {
      records,
      total,
      page: +page,
      pageSize: +pageSize,
      pages: Math.ceil(total / pageSize),
    };
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: {
        id,
        delFlag: 0,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) return;
    user.delFlag = 1;
    user.updater = 'xx';
    await this.userRepository.save(user);
  }
}
