import { Component, Input,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: Array<string>;
  mine: string;
  @Input() newData: string;

  constructor() {
    this.names = ['Alex', 'Joe', 'Carla'];
    this.mine = this.names[0];
  }

  AddArticle(title: HTMLInputElement, link:HTMLInputElement):boolean {
    //console.log(`Adding title ${title.value} and link $(link.value)`);
    this.names.push(title.value);


    return false;
  }

  ngOnInit() {
  }

}
