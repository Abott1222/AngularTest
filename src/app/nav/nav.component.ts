import {Component} from "@angular/core"
import {ActivatedRoute} from "@angular/router"
import {AuthService} from "../user/auth.service"


@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',

})

export class NavComponent {
  constructor(private route:ActivatedRoute, private auth:AuthService) {}
}
