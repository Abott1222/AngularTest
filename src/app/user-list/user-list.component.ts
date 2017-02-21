import { Component, Input,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: Array<string>;ss
  mine: string;

  constructor() {
    this.names = ['Alex', 'Joe', 'Carla'];
    this.mine = this.names[0];
  }

  ngOnInit() {
  }

}
