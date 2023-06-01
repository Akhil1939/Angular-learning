
export interface User {
    name: string;
    email: string;
}

export class User implements User {
    name: string = '';
    email: string = '';
}