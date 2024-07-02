import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './services/user/user.service';
import { User } from './user/user';
import { LogInterceptor } from './interceptor/log/log.interceptor';

// @UseInterceptors(new LogInterceptor())
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
