import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      "id" : 1,
      "name" : "Leanne Graham",
      "email" : "sincere@april.biz" ,
      "role" : "INTERN"
     },
    {
      "id" : 1,
      "name" : "Leanne john",
      "email" : "apology@april.biz" ,
      "role" : "ENGINEER"
     },
    {
      "id" : 1,
      "name" : "jingle",
      "email" : "sinc@april.biz" ,
      "role" : "ADMIN"
     },
    {
      "id" : 1,
      "name" : "Leanne TUNDE Graham",
      "email" : "sincere@april.biz" ,
      "role" : "ENGINEER"
     },
    {
      "id" : 1,
      "name" : "Leanne Graham",
      "email" : "sincere@april.biz" ,
      "role" : "INTERN"
     }
  ]

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN' ){
    if(role){
      return this.users.filter(user => user.role === role )
    }

    return this.users
  }

  findOne(id: number){
    const user = this.users.find(user => user.id === id)

    return user
  }
}
