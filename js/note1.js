console.log("Hello World");

// Ceci est un commentaire sur une ligne 
/**
 * 
 * Ceci est un commentaire multiligne
 * 
 */

// On dispose de trois mots clés 

    // var, let et const

var test = "bonjour"; //interdit cette semaine

let test2 ="le";

test2 ="les"; // l'operateur = est un operateur d'assignation

const test3 ="monde!";
test3 = "mondes";

// Numbers
const age = 23;
// Variable
let x;
// Text (string)
const aRandomString = "some Text"
//Operations 
let addition = 4 + 4;
// booleans
let myBoolean = true;

const PI = 3.14;

// Objects
let name = {firstName: "Paul", lastName:"MOULEROT"};

console.log()

// Arrays
let myArrays = ["Banana", "Test", "Application"];

// Array methods
let numberOne = 1;

let numberTwo = 3;

let sum = numberOne + numberTwo;

// Ceci est une fonction
// numberOne est un parametre (ou un argument) de la fonction sum
// entre les accolades se trouve le corps de la fonction, c'est la qu'est stockee la logique de la fonction
function square (number) {
    return number * number;
}

//Ceci est la meme fonction
const square = (number) => {
    return number * number;
}
// ceci est la meme fonction
const square = number => number * number;

const number = square (2);
console.log(number)