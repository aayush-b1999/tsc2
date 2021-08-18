"use strict";
var spiderman;
spiderman = {
    name: "Spiderman",
    releaseYear: 2018,
    describe: function () {
        console.log("The game " + this.name + " was released in " + this.releaseYear);
    }
};
spiderman.describe();
// class implementing interface
var PlaystationGames = /** @class */ (function () {
    function PlaystationGames(name, releaseYear, hardware) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.hardware = hardware;
    }
    PlaystationGames.prototype.describe = function () {
        console.log("The game " + this.name + " was released in " + this.releaseYear + " for " + this.hardware);
    };
    return PlaystationGames;
}());
var godOfWar;
godOfWar = new PlaystationGames("God Of War", 2017, "PS5");
godOfWar.describe();
var Man = /** @class */ (function () {
    function Man(name, age) {
        this.name = name;
        this.age = age;
    }
    Man.prototype.greet = function () {
        console.log("Hi!! " + this.name);
    };
    return Man;
}());
var add = function (a, b) {
    return a + b;
};
console.log(add(20, 30));
var Stud = /** @class */ (function () {
    function Stud(n) {
        if (n) {
            this.name = n;
        }
    }
    Stud.prototype.describe = function () {
        if (this.name) {
            console.log(this.name);
            return;
        }
        console.log("No Name");
    };
    return Stud;
}());
var ryan = new Stud();
ryan.describe();
// no output for interfaces in js file 
