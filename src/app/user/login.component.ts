import {Component} from "@angular/core"
import {AuthService} from "./auth.service"

@Component({
  templateUrl:"./login.component.html"

})

export class LoginComponent {
  constructor(private auth:AuthService) {}

  login(formValues) {
    console.log(formValues);
    this.auth.loginUser(formValues.userNameProperty, formValues.passwordProperty)
  }

}
