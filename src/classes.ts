// Classes 
class Person{
    name: string;
    age: number;
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    say(this:Person){
        console.log(this.name);
    }
}

const aayush=new Person("Aayush Bhatnagar",22);
console.log(aayush);

const dummy={name: "Dummy",age: 10,say:aayush.say};
dummy.say();

// private and public(Default)
class Department{
    name: string;
    protected employees: string[]=[];
    constructor(n:string){
        this.name=n;
    }
    describe(this: Department){
        console.log('Department: '+this.name);
    }
    addEmployee(this:Department,employee:string){
        this.employees.push(employee);
    }
    employeeList(this:Department){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const developer=new Department("Developer");
developer.addEmployee("Aayush Bhatnagar");
developer.addEmployee("Akshat Gupta");
developer.employeeList();

// developer.employees[1]="KOI hai"


// shorthand initialization

class Car{
    constructor(public readonly name:string,private type:string){
        
    }
    describe(this:Car){
        console.log(`The car is: ${this.name} and type is ${this.type}`);
        
    }
}

const creta=new Car("Creta","SUV");
// creta.name="City";
creta.describe();

// Inheritance - protected is also there as access modifier
class ItDepartment extends Department{
    constructor(n:string,public adminList:string[]){
        super(n);
    }
    printAdmins(this:ItDepartment){
        console.log(this.adminList);
    }
    addEmployee(employee:string){
        if(employee==="Saksham")return;
        this.employees.push(employee);
    }
}

const hyd=new ItDepartment('IT',["Saksham Maggo","Sahil Jamwal"])
hyd.printAdmins();
hyd.addEmployee("Akshat Gupta");
hyd.employeeList();

// getter setter static

class Student{
    static school:string="DAV Public School"
    constructor(private id:number,public age:number){

    }
    static branchName(){
        console.log("New Panvel");
        
    }
    get rollNo(){
        return this.id;
    }
    set rollNo(n:number){
        this.id=n;
    }
}

let beta=new Student(1,22);
console.log(beta.rollNo);
beta.rollNo=10;
console.log(beta.rollNo);
Student.branchName();
console.log(Student.school);

// abstract class- abstract method making class abstract forcing the inheriting class to provide implementation
abstract class Animal{
    abstract move():void;
}

class Dog extends Animal{
    move(){
        console.log("legs");
    }
}
let dobberman=new Dog();
dobberman.move();


// singleton class- class with single instance

class Codeforces{
    private static instance:Codeforces
    private constructor(public rank:number,public rating:number){

    }
    static getInstance(){
        if(this.instance)return this.instance;
        return new Codeforces(500,1849);
    }
}

let my=Codeforces.getInstance();
console.log(my);


