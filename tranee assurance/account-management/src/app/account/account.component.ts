import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../models/account.model';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService],
})
export class AccountComponent {
  constructor(private accountService: AccountService) {}
  @Input() account:Account = {id:0, name:'', status:''};
  @Input() id:number = 0;
  // @Output() statusChanged = new EventEmitter<{id:number, newStatus:string}>();

  onSetTo(status:string) {
    // this.statusChanged.emit({id:this.id, newStatus:status});
    this.accountService.updateStatus(this.id, status);
    console.log('A server status changed, new status: ' + status)
  }

}
