
import { Component } from '@angular/core';
import { User } from './model';



@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {

  dataList:string[] = ['one', 'two', 'three', 'four', 'five'];

  Users:User[] = [
    {name: 'John', email: ' john@gmail.com', accounts: ['account1', 'account2', 'account3']},
    {name: 'Doe', email: 'doe@gmail.com', accounts: ['account1', 'account2']},
    {name: 'Smith', email: 'smith@gmail.com', accounts: ['account1', 'account2', 'account3', 'account4']}
  ];

  
}
