import { AccountService } from './../account.service';
import { Component,EventEmitter,Output } from '@angular/core';
import { logService } from '../log.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[logService, AccountService]
})
export class NewAccountComponent {

  constructor(private logService:logService, private AccountService:AccountService){}


  // @Output() accountAdded = new EventEmitter<{name:string, status:string}>();
  onCreateAccount(name:string, status:string){
    // this.accountAdded.emit({name:name, status:status});
      this.AccountService.addAccount(name, status);
    this.logService.logStatusChange(status);
  }

}
