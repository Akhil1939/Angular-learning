import { Component, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';

  dataList:User[] = [
    {name:'Akhil',email:'akhil@gmail.com'}
  ];
  
 
  handleUserAdded(user:User){
    this.dataList.push(user);
  }
}
