import {Routes} from '@angular/router'

import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {CreateUserComponent} from "./shared/create-user.component";
import {UserListResolver} from "./shared/user-list.resolver.service"

export const appRoutes:Routes = [
  // if /users/ use UserListComponent
  {path: "users", component: UserListComponent, resolve:
    {users:UserListResolver}},
  //reason this is first is because we dont want to think new is meant to be parameter
  {path:"users/new", component: CreateUserComponent},
  //:id is parameter placeholder where we expect a value to be passed in on route
  {path: "users/:id", component: UserDetailsComponent},
  {path: "", redirectTo: "/users", pathMatch:"full"},
  {path:"user" , loadChildren:"app/user/user.module#UserModule"}




]
