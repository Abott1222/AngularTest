import {Routes} from '@angular/router'

import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

export const appRoutes:Routes = [
  // if /users/ use UserListComponent
  {path: "users", component: UserListComponent},
  //:id is parameter placeholder where we expect a value to be passed in on route
  {path: "users/:id", component: UserDetailsComponent},
  {path: "", redirectTo: "/users", pathMatch:"full"}

  


]
