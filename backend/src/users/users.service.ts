import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'David',
      email: 'david@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Samuel',
      email: 'samuel@gmail.com',
      role: 'STUDENT',
    },
    {
      id: 3,
      name: 'Chloe',
      email: 'chloe@gmail.com',
      role: 'STUDENT',
    },
    {
      id: 4,
      name: 'Ruby',
      email: 'ruby@gmail.com',
      role: 'STUDENT',
    },
    {
      id: 5,
      name: 'Smith',
      email: 'smith@gmail.com',
      role: 'ADMIN',
    },
  ];
  findAllUsers(role?: 'ADMIN' | 'STUDENT') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(user: { name: string; email: string; role: 'STUDENT' | 'ADMIN' }) {
    // generate ID
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    // generate ID and push to array
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);
  }

  updateUser(
    id: number,
    userDetails: { name?: string; email?: string; role?: 'STUDENT' | 'ADMIN' },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userDetails };
      }
      return user;
    });

    return this.findUser(id);
  }

  deleteUser(id: number) {
    const removedUser = this.findUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
