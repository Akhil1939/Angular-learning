// Run: tsc Classes.ts && node Classes.js
import { iUser } from "./interface";
// Class
// Class is a blueprint for creating objects with specific functions and properties already attached to it.
// Class is a template for creating objects.
// Class is a user defined data type.
// Class is a reference type.
// Class is a logical entity.
// Class is a collection of objects.
// Class is a group of similar objects.
// Class is a group of similar entities.
//--------------------------------------------------------------
//---------------1------------
class Employee {
  empCode!: number;
  empName!: string;

  getSalary(): number {
    return 10000;
  }
  getManagerName(): string {
    return "Manager Name";
  }
}

let john = new Employee();
john.empCode = 123;
john.empName = "John Doe";
// console.log(john);
// console.log(john.getSalary());
// console.log(john.getManagerName());

//---------------2------------
class Employee2 {
  private empCode: number;
  protected empName: string;
  empAge!: number;

  constructor(code: number, name: string, age?: number) {
    this.empCode = code;
    this.empName = name;
  }

  //getter and setter
  //getter is a method that is used to read the value of a private field
  //setter is a method that is used to set the value of a private field
  get EmpCode(): number {
    return this.empCode;
  }
  set EmpCode(code: number) {
    this.empCode = code;
  }
  //method
  //method is a function inside a class
  //method is a function that belongs to an object
  //method is a function that is associated with an object
  //method is a function that is defined inside a class
  getSalary(): number {
    return 10000;
  }
  getManagerName(): string {
    return "Manager Name";
  }
}

let john2 = new Employee2(123, "John Doe", 30);
// console.log(john2.getManagerName());
// console.log(john2.getSalary());

//---------------3------------

//extends keyword is used to inherit the properties and methods of a parent class
//super keyword is used to call the constructor of the parent class
class Manager extends Employee2 {
  constructor(code: number, name: string) {
    super(code, name);
  }
  getSalary(): number {
    return 20000;
  }
  getManagerName(): string {
    return "Manager Name";
  }
}

let manager = new Manager(123, "John Doe");
// console.log(manager.getManagerName());


//---------------4------------
// implement interfaces

class user implements iUser{
  name!: string;
  age!: number;
  address!: string;
  phone!: number;

  Login(): user{
      return this;
  }
}

let john3: user = {
  name: "John Doe",
  age: 30,
  address: "1234",
  phone: 1234567890,
  Login(): user{
      return this;
  }
}

// console.log(john3.Login());

//---------------5------------
// object destructuring
let {name, age, address, phone}: user = john3;
// console.log(name, age, address, phone);


//---------------6------------
// Array destructuring
let users: user[] = [
  {
    name: "John Doe1",
    age: 30,
    address: "1234",
    phone: 1234567890,
    Login(): user{
        return this;
    }
  },
  {
    name: "John Doe1",
    age: 31,
    address: "1234",
    phone: 1234567890,
    Login(): user{
        return this;
    }
  },
  {
    name: "John Doe1",
    age: 32,
    address: "1234",
    phone: 1234567890,
    Login(): user{
        return this;
    }
  },
  {
    name: "John Doe1",
    age: 33,
    address: "1234",
    phone: 1234567890,
    Login(): user{
        return this;
    }
  }

]

let [user1, user2] = users;
// console.log(user1.Login());
// console.log(users[0].Login());

let result = users.filter((user) => user.age > 31);
console.log(result)




