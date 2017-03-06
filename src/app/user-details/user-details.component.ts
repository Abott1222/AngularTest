import {Component, OnInit} from "@angular/core/";
import {UserService} from "../shared/user.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  //app/user-details/user-details.component.html
  templateUrl: "./user-details.component.html",
  styles: [`
    .container {
      padding-left:20px; padding-right:20px;
    }

    .user-image {
      height:200px;
      width:200px;
    }
  `]
})

export class UserDetailsComponent implements OnInit {
user:any

constructor(private userService:UserService, private route:ActivatedRoute) {}

ngOnInit() {
  this.user = this.userService.getUser(+this.route.snapshot.params["id"]);
}
}
