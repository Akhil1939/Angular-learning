import { Component, EventEmitter, Input, Output } from '@angular/core';
import { roomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
@Input() rooms: roomList[] = [];

@Output() roomSelected = new EventEmitter<roomList>();

SelectRoom(room: roomList){
  this.roomSelected.emit(room)
}
}
