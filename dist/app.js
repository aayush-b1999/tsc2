"use strict";
// advanced types 
var _a;
var peter = {
    name: "Peter",
    priveleges: ["create-server", "mantain-server"],
    startDate: new Date()
};
var val = 12;
// typeguard
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// checking in union of two custom types
function printEmployeeInfo(a) {
    console.log(a.name);
    if ("startDate" in a)
        console.log(a.startDate);
    if ('priveleges' in a)
        console.log(a.priveleges);
}
printEmployeeInfo({ name: 'John Cena', startDate: new Date() });
// checking the variable's structure similarity to classes
var gaadi = /** @class */ (function () {
    function gaadi() {
    }
    gaadi.prototype.driving = function () {
        console.log("driving");
    };
    return gaadi;
}());
var truck = /** @class */ (function () {
    function truck() {
    }
    truck.prototype.driving = function () {
        console.log("driving a truck .. ");
    };
    truck.prototype.loading = function (a) {
        console.log("loaded " + a + " amount of goods");
    };
    return truck;
}());
function useVehicle(a) {
    a.driving();
    if (a instanceof truck)
        a.loading(1000);
}
var car = new gaadi();
var bigTruck = new truck();
useVehicle(bigTruck);
useVehicle(car);
function movingAnimal(a) {
    var speed;
    switch (a.type) {
        case 'Bird':
            speed = a.flyingSpeed;
            break;
        case 'Horse':
            speed = a.runningSpeed;
            break;
    }
    console.log('Animal moves at ' + speed);
}
movingAnimal({ type: 'Bird', flyingSpeed: 100 });
movingAnimal({ type: 'Horse', runningSpeed: 200 });
// typecasting html elements
// const textBox=<HTMLInputElement>document.getElementById('text-box');
var textBox = document.getElementById('text-box');
textBox.value = "Hi Everyone!!";
var errorBag = {
    email: "Wrong one",
    // username:1  // not working key-value should be string-string
};
function addition(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var res = addition('The ', 'Rock');
res.split(' ');
// optional chaining
var fetchUserData = {
    id: 'u1',
    name: 'Arnold',
    job: { title: 'CEO', description: 'Running the company' } // if job didn't exist while fetching stuff from backend  then below ? optional chaining would check inside console.log
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.description);
// nullish coalescing
var dwayne = '';
var johnson = dwayne !== null && dwayne !== void 0 ? dwayne : 'Default'; // empty string is treadted as falsy so if we use || operator then empty string will be replaced by deafult value.
console.log(johnson);
