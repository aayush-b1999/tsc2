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
// Classes 
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.say = function () {
        console.log(this.name);
    };
    return Person;
}());
var aayush = new Person("Aayush Bhatnagar", 22);
console.log(aayush);
var dummy = { name: "Dummy", age: 10, say: aayush.say };
dummy.say();
// private and public(Default)
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.employeeList = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var developer = new Department("Developer");
developer.addEmployee("Aayush Bhatnagar");
developer.addEmployee("Akshat Gupta");
developer.employeeList();
// developer.employees[1]="KOI hai"
// shorthand initialization
var Car = /** @class */ (function () {
    function Car(name, type) {
        this.name = name;
        this.type = type;
    }
    Car.prototype.describe = function () {
        console.log("The car is: " + this.name + " and type is " + this.type);
    };
    return Car;
}());
var creta = new Car("Creta", "SUV");
// creta.name="City";
creta.describe();
// Inheritance - protected is also there as access modifier
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(n, adminList) {
        var _this = _super.call(this, n) || this;
        _this.adminList = adminList;
        return _this;
    }
    ItDepartment.prototype.printAdmins = function () {
        console.log(this.adminList);
    };
    ItDepartment.prototype.addEmployee = function (employee) {
        if (employee === "Saksham")
            return;
        this.employees.push(employee);
    };
    return ItDepartment;
}(Department));
var hyd = new ItDepartment('IT', ["Saksham Maggo", "Sahil Jamwal"]);
hyd.printAdmins();
hyd.addEmployee("Akshat Gupta");
hyd.employeeList();
