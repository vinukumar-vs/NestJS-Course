import { Controller, Get } from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  getUsers(): User[] {
    return this.userService.findAll();
  }

  @Get('/:id')
  getUser(id: string): User {
    return this.userService.findOne(id);
  }
}
