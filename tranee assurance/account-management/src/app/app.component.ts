import { Component } from '@angular/core';
import { Account } from './models/account.model';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService],
})
export class AppComponent {
  constructor(private accountService: AccountService) {}
  title = 'account-management';
  accounts = this.accountService.accounts;
  // onAccountAdded(account: { name: string; status: string }) {
  //   this.accountService.addAccount(account.name, account.status);
  // }

  // onStatusChanged(updateInfo: { id: number; newStatus: string }) {
  //   this.accountService.updateStatus(updateInfo.id, updateInfo.newStatus);
  // }
}
