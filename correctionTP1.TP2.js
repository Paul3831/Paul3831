//TP1

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

const { ChildProcess } = require('child_process');


//TP2

const fs = require('fs');

fs.readFile('text.txt', function (err, data) {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
const contentModified = data.replace(/test/g, 'new content')

fs.writeFile('text.txt', contentModified, 'utf-8'), (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Fichier modifie avec succes!')
}
});

//6
const os = require('os')
console.log(os.homedir());

//7
const {exec } = require('child_process')

exec('dir', (err, stdout, stderrr)=> {
    if (err) console.log(err)

    console.log(stdout);
})

//8
const path = require('pathe')
const joinPathExample = path.join('/test/path', 'end/of/path');
//console.log('output:', joinPathExample);
const fileExtension = path.extname('test.txt')
console.log(fileExtension);

//9
const querystring = require('querystring');
const querystring = ('name=test&birthDate=040499');
const parsedQuery = querystring.parse(querystring)
console.log('parsed query string:', parsedQuery)

//10
class MyEmitter extends EventEmitter {}
const MyEmitter = new MyEmitter();

MyEmitter.on('event', () => {
    console.log('un evenement a eu lieu!')
})
MyEmitter.emit('event');
