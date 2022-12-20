function numberToWords(num) {
const ones = ['', 'one', "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eight", "ninety"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];

if (num < 10) {
    return ones [num];
} else if (num < 20) {
    return teens [num - 10];
} else {
    return tens [Math.floor(num / 10)] + '-' + ones [num % 10]; // concatenation de strings avec l'opérateur +
}
}
console.log(numberToWords(91));

//6

const objectArray = [
    {firstname: "John", lastname: "Doe"},
    {firstname: "John", lastname: "Doe"},
    {firstname: "John", lastname: "Doe"},
    {firstname: "John", lastname: "Doe"},
    {firstname: "John", lastname: "Doe"},
    {firstname: "John", lastname: "Doe"},
]

function getPropertyValues(objArray , propName) {
    return objectArray.map(obj => obj [propName]);
}

console.log(getPropertyValues(objectArray, 'lastname'));

//8

function capitalizeVowels(str){
    return str.replace(/[aeiou]/gi, vowel => vowel.toUpperCase());

}