import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AppComponent,
  UserItemComponent,
  UserListComponent,
  UserDetailsComponent,
  UserService,
  ToastrService,
  CreateUserComponent,
  appRoutes,
  UserListResolver
} from "./index"


import {AuthService} from "./user/auth.service"
import {RouterModule} from "@angular/router"

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserListComponent,
    UserDetailsComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ToastrService, UserListResolver, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
