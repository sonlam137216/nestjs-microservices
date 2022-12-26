import { Controller, Get, Post, Request } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('hello')
  getHello(): any {
    return this.accountService.hello();
  }

  @Post('sign-up')
  async register(@Request() req) {
    return this.accountService.register({ body: req.body });
  }

  @Post('sign-in')
  async login(@Request() req) {
    return this.accountService.login({ body: req.body });
  }
}
