import {Injectable} from "@angular/core"
import {Resolve} from "@angular/router"
import {UserService} from "./user.service"

@Injectable()
export class UserListResolver implements Resolve<any> {
  constructor(private userService:UserService) {}
  //waits for ajax or other asynchonous call to return and then returns data in resolve
  resolve() {
    //calling getEvents which returns observable
    return this.userService.getUsers().map((users) => {
        //console.log(users)
        return users;
      })
  }

}
