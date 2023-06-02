import { Account } from "./models/account.model";

export class AccountService{
    accounts:Account[] = [
        {id:1, name:'Account 1', status:'active'},
        {id:2, name:'Account 2', status:'inactive'},
        {id:3, name:'Account 3', status:'unknown'},
        {id:4, name:'Account 4', status:'active'},
        {id:5, name:'Account 5', status:'inactive'},
      ];

        addAccount(name:string, status:string){
            this.accounts.push({id:this.accounts.length+1, name:name, status:status});
        }

        updateStatus(id:number, status:string){
            this.accounts[id].status = status;
        }
}