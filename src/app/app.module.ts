import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { EventListComponent} from './event-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './shared/user.service';
import {ToastrService} from "./shared/toastr.service"

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    EventListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
