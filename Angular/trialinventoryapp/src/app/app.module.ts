import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RoomsComponent} from './rooms/rooms.component';

import { RoomListComponent } from './rooms/room-list/room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
