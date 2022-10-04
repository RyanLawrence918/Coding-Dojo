//each ninja has name, health, speed, strength
//speed & str have default value of 3

class Ninja{
    constructor(n, health=100,){
        this.name = n;
        this.health = health
        this.speed = 3; //default value
        this.strength = 3; //default value
    }
    //methods are things the ninja can do 
    
    //sayName method
    sayName(){
        console.log(`Konnichi wa ${this.name} desu.`);
    }
    //showStats method
    showStats(){
        console.log(`Stats: \n Name: ${this.name} \n Strength: ${this.strength} \n Speed: ${this.speed} \n Health: ${this.health}`)
    }
    //drinkTea method
    drinkTea(){
        this.health += 10;
    }
}


let ninja1 = new Ninja("Hyabusa", 100, 3, 3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkTea();
ninja1.showStats();

module.exports=Ninja;