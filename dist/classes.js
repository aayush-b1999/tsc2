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
// getter setter static
var Student = /** @class */ (function () {
    function Student(id, age) {
        this.id = id;
        this.age = age;
    }
    Student.branchName = function () {
        console.log("New Panvel");
    };
    Object.defineProperty(Student.prototype, "rollNo", {
        get: function () {
            return this.id;
        },
        set: function (n) {
            this.id = n;
        },
        enumerable: false,
        configurable: true
    });
    Student.school = "DAV Public School";
    return Student;
}());
var beta = new Student(1, 22);
console.log(beta.rollNo);
beta.rollNo = 10;
console.log(beta.rollNo);
Student.branchName();
console.log(Student.school);
// abstract class- abstract method making class abstract forcing the inheriting class to provide implementation
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.move = function () {
        console.log("legs");
    };
    return Dog;
}(Animal));
var dobberman = new Dog();
dobberman.move();
// singleton class- class with single instance
var Codeforces = /** @class */ (function () {
    function Codeforces(rank, rating) {
        this.rank = rank;
        this.rating = rating;
    }
    Codeforces.getInstance = function () {
        if (this.instance)
            return this.instance;
        return new Codeforces(500, 1849);
    };
    return Codeforces;
}());
var my = Codeforces.getInstance();
console.log(my);
