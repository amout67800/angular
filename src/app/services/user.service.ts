import { Injectable } from '@angular/core';
import { USERS } from '../core/mocks/mock-users';
import { User } from '../core/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
