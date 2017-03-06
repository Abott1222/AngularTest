import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserService} from './shared/user.service';
import {ToastrService} from "./shared/toastr.service"
import {CreateUserComponent} from "./shared/create-user.component"
import {RouterModule} from "@angular/router"
import {appRoutes} from "./routes"

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
  providers: [UserService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
