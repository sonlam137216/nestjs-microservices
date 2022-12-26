import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import User from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  hello() {
    return 'hello from user service';
  }

  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);

    await this.usersRepository.save(newUser);

    return newUser;
  }
}
