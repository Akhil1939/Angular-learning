// Run: tsc Classes.ts && node Classes.js
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
console.log(john);
console.log(john.getSalary());
console.log(john.getManagerName());
//---------------2------------
var Employee2 = /** @class */ (function () {
    function Employee2(code, name) {
        this.empCode = code;
        this.empName = name;
    }
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
var john2 = new Employee2(123, "John Doe");
console.log(john2.getManagerName());
console.log(john2.getSalary());
//---------------3------------
