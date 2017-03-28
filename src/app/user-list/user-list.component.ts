import { Component, Input,Output, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {ToastrService} from "../shared/toastr.service"
import {ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: Array<string>;
  mine: string;
  @Input() newData: string;
  users: any;

  //this is how to do dependency injection
  constructor(private route:ActivatedRoute,private userService:UserService, private toastr:ToastrService) {


  }

  AddArticle(title: HTMLInputElement, link:HTMLInputElement):boolean {
    //console.log(`Adding title ${title.value} and link $(link.value)`);
    this.users.push({name:title.value, id: null});


    return false;
  }

  handleUserClick(nameOfUserFromList) {
    this.toastr.success(nameOfUserFromList);
  }

  //because getEvents is now using observable stream we need to subscribe to it
  ngOnInit() {
    this.users = this.route.snapshot.data['users']
    //this.userService.getUsers().subscribe(users => {this.users = users});
  }

}
