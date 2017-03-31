import {Component} from "@angular/core"
import {AuthService} from "./auth.service"
import {Router} from "@angular/router"

@Component({
  templateUrl:"./login.component.html"

})

export class LoginComponent {
  constructor(private auth:AuthService, private router:Router) {}

  login(formValues) {
    this.auth.loginUser(formValues.userNameProperty, formValues.passwordProperty)
    this.router.navigate(['users'])
  }

  cancel() {
    this.router.navigate(['users'])
  }

}
