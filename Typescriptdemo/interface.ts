export interface iUser{
    name: string;
    age: number;
    address: string;
    phone: number;  

    Login(): iUser;
}

interface Employee extends iUser{
    empCode: number;
    salary: number;
}

let john: Employee = {
    name: "John Doe",
    age: 30,
    address: "1234",
    phone: 1234567890,
    empCode: 123,
    salary: 10000,
    Login(): iUser{
        return this;
    }
}