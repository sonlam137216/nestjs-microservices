import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('account-create')
  async createUser(req) {
    console.log('REQ', req);

    return this.userService.create(req);
  }

  @MessagePattern('hello-user')
  getHello() {
    return this.userService.hello();
  }
}
