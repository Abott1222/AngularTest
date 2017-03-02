import { Component, Input,Output, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {ToastrService} from "../shared/toastr.service"

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: Array<string>;
  mine: string;
  @Input() newData: string;
  users: any[];

  constructor(private userService:UserService, private toastr:ToastrService) {


  }

  AddArticle(title: HTMLInputElement, link:HTMLInputElement):boolean {
    //console.log(`Adding title ${title.value} and link $(link.value)`);
    this.users.push(title.value);


    return false;
  }

  handleUserClick(nameOfUserFromList) {
    this.toastr.success(nameOfUserFromList);
  }

  ngOnInit() {
    this.users = this.userService.getEvents();
  }

}
