// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";

console.log(example);
let example = "I'm the example!";    

//1
console.log(hello);                                   
var hello = 'world';                                 

var hello;
console.log(hello); //logs undefined
hello = 'world';

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

var needle = 'haystack';
function test() {
    var needle = 'magnet';
    console.log(needle); //logs magnet
}
test();

//3
var brendan = 'super cool'; 
function print(){
    brendan = 'only okay';
    console.log(brendan); //logs super cool
}
console.log(brendan);

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


