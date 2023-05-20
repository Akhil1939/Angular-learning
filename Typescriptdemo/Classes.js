"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    Employee.prototype.getManagerName = function () {
        return "Manager Name";
    };
    return Employee;
}());
var john = new Employee();
john.empCode = 123;
john.empName = "John Doe";
// console.log(john);
// console.log(john.getSalary());
// console.log(john.getManagerName());
//---------------2------------
var Employee2 = /** @class */ (function () {
    function Employee2(code, name, age) {
        this.empCode = code;
        this.empName = name;
    }
    Object.defineProperty(Employee2.prototype, "EmpCode", {
        //getter and setter
        //getter is a method that is used to read the value of a private field
        //setter is a method that is used to set the value of a private field
        get: function () {
            return this.empCode;
        },
        set: function (code) {
            this.empCode = code;
        },
        enumerable: false,
        configurable: true
    });
    //method
    //method is a function inside a class
    //method is a function that belongs to an object
    //method is a function that is associated with an object
    //method is a function that is defined inside a class
    Employee2.prototype.getSalary = function () {
        return 10000;
    };
    Employee2.prototype.getManagerName = function () {
        return "Manager Name";
    };
    return Employee2;
}());
var john2 = new Employee2(123, "John Doe", 30);
// console.log(john2.getManagerName());
// console.log(john2.getSalary());
//---------------3------------
//extends keyword is used to inherit the properties and methods of a parent class
//super keyword is used to call the constructor of the parent class
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(code, name) {
        return _super.call(this, code, name) || this;
    }
    Manager.prototype.getSalary = function () {
        return 20000;
    };
    Manager.prototype.getManagerName = function () {
        return "Manager Name";
    };
    return Manager;
}(Employee2));
var manager = new Manager(123, "John Doe");
// console.log(manager.getManagerName());
//---------------4------------
// implement interfaces
var user = /** @class */ (function () {
    function user() {
    }
    user.prototype.Login = function () {
        return this;
    };
    return user;
}());
var john3 = {
    name: "John Doe",
    age: 30,
    address: "1234",
    phone: 1234567890,
    Login: function () {
        return this;
    }
};
// console.log(john3.Login());
//---------------5------------
// object destructuring
var name = john3.name, age = john3.age, address = john3.address, phone = john3.phone;
// console.log(name, age, address, phone);
//---------------6------------
// Array destructuring
var users = [
    {
        name: "John Doe1",
        age: 30,
        address: "1234",
        phone: 1234567890,
        Login: function () {
            return this;
        }
    },
    {
        name: "John Doe1",
        age: 31,
        address: "1234",
        phone: 1234567890,
        Login: function () {
            return this;
        }
    },
    {
        name: "John Doe1",
        age: 32,
        address: "1234",
        phone: 1234567890,
        Login: function () {
            return this;
        }
    },
    {
        name: "John Doe1",
        age: 33,
        address: "1234",
        phone: 1234567890,
        Login: function () {
            return this;
        }
    }
];
var user1 = users[0], user2 = users[1];
// console.log(user1.Login());
// console.log(users[0].Login());
var result = users.filter(function (user) { return user.age > 31; });
console.log(result);
