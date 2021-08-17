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

