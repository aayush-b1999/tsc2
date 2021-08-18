"use strict";
// advanced types 
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
