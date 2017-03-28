import {Injectable} from '@angular/core'
import {Subject} from "rxjs/Rx"

@Injectable()
export class UserService {
  getUsers() {
    let subject = new Subject()
    //using setTimout to simular asynchonous call(like AJAX)
    setTimeout(() =>{
      subject.next(USERS);
      subject.complete();
    },2000)
    return subject;
  }

  getUser(id:number) {
    return USERS.find(event => event.id === id);
  }
}

const USERS = [
  {
    id: 1,
    name: "Alex",
    imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/11/33/23/113323dcc07e7eeb289f332ad44c8031.jpg"
  }, {
    id: 2,
    name: "Carla",
    imageUrl: "https://s-media-cache-ak0.pinimg.com/736x/db/b8/5a/dbb85afd1141a667fc56acb7090988f0.jpg"

  }, {
    id: 3,
    name: "Joe",
    imageUrl: "http://m.memegen.com/llyyp1.jpg"
  }

];
