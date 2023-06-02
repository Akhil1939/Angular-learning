import { Component } from '@angular/core';
import { Account } from './models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'account-management';
  accounts:Account[] = [
    {id:1, name:'Account 1', status:'active'},
    {id:2, name:'Account 2', status:'inactive'},
    {id:3, name:'Account 3', status:'unknown'},
    {id:4, name:'Account 4', status:'active'},
    {id:5, name:'Account 5', status:'inactive'},
  ];
  onAccountAdded(account:{name:string, status:string}){
    this.accounts.push({
      id: this.accounts.length + 1,
      name: account.name,
      status: account.status
    });
  }
  onStatusChanged(updateInfo:{id:number, newStatus:string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
