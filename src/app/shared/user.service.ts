import {Injectable} from '@angular/core'

@Injectable()
export class UserService {
  getEvents() {
    return USERS;
  }

  getUser(id:number) {
    return USERS.find(event => event.id === id);
  }
}

const USERS = [
  {
    id: 1,
    name: "Alex",
  }, {
    id: 2,
    name: "Carla"
  }, {
    id: 3,
    name: "Joe"
  }

];
