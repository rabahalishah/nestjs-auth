import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

//mock data
const users: User[] = [
  {
    userId: 1,
    username: 'Alice',
    password: '123456',
  },
  {
    userId: 2,
    username: 'Bob',
    password: '123456',
  },
];

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
