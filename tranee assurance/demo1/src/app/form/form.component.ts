import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name:string = '';
  email:string = '';
user:User = new User();
 

@Input() dataList:User[] = [];

@Output() userAdded: EventEmitter<User> = new EventEmitter<User>()

addUser(){
  this.user.email = this.email;
  this.user.name = this.name;
    this.userAdded.emit(this.user);
    
}
}
