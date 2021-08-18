// interface + readonly properties
interface Game{
    readonly name:string;
    releaseYear: number;
    describe():void
}

let spiderman:Game;
spiderman={
    name:"Spiderman",
    releaseYear: 2018,
    describe(){
        console.log(`The game ${this.name} was released in ${this.releaseYear}`);
        
    }
}
spiderman.describe();

// class implementing interface
class PlaystationGames implements Game{
    constructor(public name:string,public releaseYear:number,public hardware:string){
        
    }
    describe(){
        console.log(`The game ${this.name} was released in ${this.releaseYear} for ${this.hardware}`);
    }
}

let godOfWar:Game
godOfWar=new PlaystationGames("God Of War",2017,"PS5");
godOfWar.describe();

// godOfWar.name="Wow";


// extending interface

interface Name{
    name:string
}

interface Age{
    age:number
}

interface Greet extends Name,Age{
    greet():void
}

class Man implements Greet{
    constructor(public name:string,public age:number){

    }
    greet(){
        console.log("Hi!! "+this.name);
        
    }
}


// interface as function types
interface AddFn{
    (a:number,b:number):number;
}

let add:AddFn=(a:number,b:number)=>{
    return a+b;
}
console.log(add(20,30));

// interface optional properties

interface naam{
    readonly name?:string
}

class Stud implements naam{
    name?:string
    constructor(n?:string){
        if(n){
            this.name=n;
        }
    }
    describe(){
        if(this.name){
            console.log(this.name);
            return;
        }
        console.log("No Name");
    }
}

let ryan=new Stud();
ryan.describe();

// no output for interfaces in js file 
