import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  findAll(): User[] {
    this.users.push(new User());
    this.users.push(new User());
    return this.users;
  }

  findOne(_id: string): User {
    return this.users[0] as User;
  }
}
