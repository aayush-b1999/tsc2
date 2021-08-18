// advanced types 

// intersection types
type Admin={
    name:string;
    priveleges:string[]
}

type Employee={
    name:string;
    startDate:Date;
}

type ElavatedEmployee= Admin&Employee;

let peter:ElavatedEmployee={
    name:"Peter",
    priveleges:["create-server","mantain-server"],
    startDate:new Date()
}
// OR

// interface Admin{
//     name:string;
//     priveleges:string[]
// }

// interface Employee{
//     name:string;
//     startDate:Date;
// }

// interface ElavatedEmployee extends Admin,Employee{}

// let peter:ElavatedEmployee={
//     name:"Peter",
//     priveleges:["create-server","mantain-server"],
//     startDate:new Date()
// }

type Combinable=number|string;
type numeric=number|boolean;

type inter=Combinable&numeric;

let val:inter=12;

// typeguard

function combine(a:Combinable,b:Combinable){
    if(typeof a==="string" || typeof b==="string"){
        return a.toString()+b.toString();
    }
    return a+b;
}

type UnknownEmployee=Admin|Employee;

// checking in union of two custom types

function printEmployeeInfo(a:UnknownEmployee){
    console.log(a.name);
    if("startDate" in a)
    console.log(a.startDate);
    if('priveleges' in a)
    console.log(a.priveleges);
}

printEmployeeInfo({name:'John Cena',startDate:new Date()});

// checking the variable's structure similarity to classes

class gaadi{
    driving(){
        console.log("driving");
    }
}

class truck{
    driving(){
        console.log("driving a truck .. ");
    }
    loading(a:number){
        console.log("loaded "+ a +" amount of goods");
    }
}

type Vehicle=gaadi|truck;

function useVehicle(a:Vehicle){
    a.driving();
    if(a instanceof truck)
    a.loading(1000);
}

let car=new gaadi();
let bigTruck=new truck();

useVehicle(bigTruck);
useVehicle(car);
