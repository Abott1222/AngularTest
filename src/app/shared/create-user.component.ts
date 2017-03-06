import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  template: `
    <h1> New Event </h1>
    <div class = "col-md-6">
      <h3> Form goes here </h3>
      <br/>
      <br/>
      <button type="submit"> Save </button>
      <button type="submit" (click) = "cancel()"> Cancel </button>
    </div>
  `


})

export class CreateUserComponent implements OnInit {

constructor(private router:Router) {}

ngOnInit() {


}

cancel() {
  this.router.navigate(["/users"])

}

}
