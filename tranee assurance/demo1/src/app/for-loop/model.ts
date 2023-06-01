
export interface User {
    name: string;
    email: string;
    accounts: string[];
}

export class User implements User {
    name: string = '';
    email: string = '';
    accounts: string[] = [];

    constructor(name: string, email: string, accounts: string[]) {
        this.name = name;
        this.email = email;
        this.accounts = accounts;

    }   
}