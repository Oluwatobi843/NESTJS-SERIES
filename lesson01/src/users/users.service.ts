import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 1,
      name: 'Leanne john',
      email: 'apology@april.biz',
      role: 'ENGINEER',
    },
    {
      id: 1,
      name: 'jingle',
      email: 'sinc@april.biz',
      role: 'ADMIN',
    },
    {
      id: 1,
      name: 'Leanne TUNDE Graham',
      email: 'sincere@april.biz',
      role: 'ENGINEER',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => (b.id = a.id));
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    }
  ){
    this.users = this.users.map(user => {
      if(user.id === id){
        return {...user, ...updatedUser}
      }
      return user
    })

     return this.findOne(id);
  }
}
