//each ninja has name, health, speed, strength
//speed & str have default value of 3
const Ninja = require("./ninja")
// class Ninja{
//     constructor(n){
//         this.name = n;
//         this.health = 100;
//         this.speed = 3; //default value
//         this.strength = 3; //default value
//     }
//     //methods = things the ninja can do 
    
//     //sayName method
//     sayName(){
//         console.log(`Konnichi wa ${this.name} desu.`);
//     }
//     //showStats method
//     showStats(){
//         console.log(`Stats: \n Name: ${this.name} \n Strength: ${this.strength} \n Speed: ${this.speed} \n Health: ${this.health}`)
//     }
//     //drinkTea method
//     drinkTea(){
//         this.health += 10;
//     }
// }

class Sensei extends Ninja{
    constructor(n){
        super(n)
        //changing default values of ninja class
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        //adding unique attribute - wisdom to sensei class
        this.wisdom = 10
    }
    //unique action (method) only sensei can do
    //speakWisdom method
    speakWisdom(){
        this.drinkTea();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

let ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkTea();
ninja1.showStats();

let superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();