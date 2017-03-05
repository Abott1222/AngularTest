import {Component, OnInit} from "@angular/core/";
import {UserService} from "../shared/user.service";


@Component({
  //app/user-details/user-details.component.html
  templateUrl: "./user-details.component.html",
  styles: [`
    .container {
      padding-left:20px; padding-right:20px;
    }

    .user-image {
      height:100px;
    }
  `]
})

export class UserDetailsComponent implements OnInit {
user:any

constructor(private userService:UserService) {}

ngOnInit() {
  this.user = this.userService.getUser(1);
}
}
