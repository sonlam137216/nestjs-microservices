import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async signIn() {
    return this.client.send<any, any>('auth-sign-in', 'auth sign in event');
  }
}
