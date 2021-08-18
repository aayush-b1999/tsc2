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

// discriminated union- common property with different value
interface Bird{
    flyingSpeed:number;
    type:'Bird';
}

interface Horse{
    runningSpeed:number;
    type:'Horse';
}

type Jaanwar=Bird|Horse;

function movingAnimal(a:Jaanwar){
    let speed:number;
    switch(a.type){
        case 'Bird':speed=a.flyingSpeed;
        break;
        case 'Horse':speed=a.runningSpeed;
        break;
    }
    console.log('Animal moves at '+speed);
    
}
movingAnimal({type:'Bird',flyingSpeed:100});
movingAnimal({type:'Horse',runningSpeed:200});

// typecasting html elements
// const textBox=<HTMLInputElement>document.getElementById('text-box');
const textBox=document.getElementById('text-box') as HTMLInputElement;

textBox.value="Hi Everyone!!";

// index properties- flexible properties
interface ErrorContainer{
    [prop:string]:string;
}

let errorBag:ErrorContainer={
    email:"Wrong one",
    // username:1  // not working key-value should be string-string
}


function addition(a:number,b:number):number;
function addition(a:string,b:string):string;
function addition(a:string,b:number):string;
function addition(a:number,b:string):string;
function addition(a:Combinable,b:Combinable){
    if(typeof a==='string' || typeof b==='string'){
        return a.toString()+b.toString();
    }
    return a+b;
}

const res=addition('The ','Rock');
res.split(' ');

// optional chaining

const fetchUserData={
    id:'u1',
    name:'Arnold',
    job:{title:'CEO',description:'Running the company'} // if job didn't exist while fetching stuff from backend  then below ? optional chaining would check inside console.log
}

console.log(fetchUserData?.job?.description)

// nullish coalescing

let dwayne='';
let johnson=dwayne??'Default';  // empty string is treadted as falsy so if we use || operator then empty string will be replaced by deafult value.
console.log(johnson);













