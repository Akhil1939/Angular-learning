import { Component } from '@angular/core';
import { Rooms, roomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = 'Hotel California';
  numberOfRooms = 0;
hideRooms = false;
  addRoom() {
    this.numberOfRooms++;
  }
  toggleRooms() {
this.hideRooms = !this.hideRooms;
  }

  rooms : Rooms = {
    totalRooms: 130,
    availableRooms: 120,
    bookedRooms: 10
  }

  roomList : roomList[] = [{
    roomType: 'Single',
    roomNumber: 101,
    roomPrice: 100,
    photo: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60',
    checkInTime: new Date('07/01/2019 10:30') 
  },
  {
    roomType: 'Double', 
    roomNumber: 102,
    roomPrice: 200,
    photo: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60',
    checkInTime: new Date('07/01/2019 10:30')
  },
  {
    roomType: 'Suite',
    roomNumber: 103,
    roomPrice: 300,
    photo: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60',
    checkInTime: new Date('07/01/2019 10:30')
  },
  {
    roomType: 'Deluxe',
    roomNumber: 104,
    roomPrice: 400,
    photo: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60',
    checkInTime: new Date('07/01/2019 10:30')
  }
  
]
}
