import { faker } from '@faker-js/faker';

export class User {
  id: string;
  firstname: string;
  lastname: string;

  constructor() {
    this.id = faker.string.uuid();
    this.firstname = faker.person.firstName();
    this.lastname = faker.person.lastName();
  }
}
