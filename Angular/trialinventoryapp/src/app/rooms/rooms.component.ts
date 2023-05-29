import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = 'Hotel California';
  numberOfRooms = 120;
hideRooms = false;
  addRoom() {
    this.numberOfRooms++;
  }
  toggleRooms() {
this.hideRooms = !this.hideRooms;
  }
}
