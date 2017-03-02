import {Injectable} from '@angular/core'

@Injectable()
export class UserService {
  getEvents() {
    return USERS;
  }
}

const USERS = ['Alex', 'Joe', 'Carla'];
