alert('Hello World!'); // Displays and alert
console.log('Secret Messsage'); // Lets you do secret staff

var num = 5;
console.log(num);

var numOfPuppies = 5;
var numOfKittens = 7;
var animalsLeft = numOfPuppies - numOfKittens;
var numOfCats = numOfKittens + 2;
console.log("number of cats: ", numOfCats);

var alphabet = "abcdefghijkl";
console.log("letters: ",alphabet);

var fullName = "Wilmar Delgado";
console.log("Full Name: ",fullName);

var fullName = "Wilmar ";
fullName += "Delgado";
console.log(fullName); //Outputs Full Name

var name = prompt('Whats your name?')
console.log("hello " + name + " welcome back!");

function parrotFacts() {
    console.log("Some parrot species can live for over 80 years");
    console.log("Kakapos are critically endangered flightless parrot");
}
parrotFacts()

function outputSentence() {
    console.log("This will putput a sentence in my consolee");
}
outputSentence()

function callKitten (kittenName) {
    console.log("come here " + kittenName + "!");
}
callKitten("Fluffy");

function addNumbers (a, b) {
    console.log (a + b)
}

addNumbers (5, 7);
addNumbers (9, 12);


function addOne (num) {
    var newNumber = num + 1;
    console.log ("You now have " + newNumber);
}

var numberOfKittens = 5;
var numberOfPuppues = 4;

addOne (numberOfKittens);
addOne (numberOfPuppues);


function square(num) {
    return num + num;
}
console.log(square(4));
var squareOfFive = square(5);



function combination(first, last) {
    return first + last;
}
console.log(combination('Wilmar', 'Delgado'));



