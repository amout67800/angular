import { Injectable } from '@angular/core';
import { USERS } from '../mocks/mock-users';
import { User } from '../shared/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
