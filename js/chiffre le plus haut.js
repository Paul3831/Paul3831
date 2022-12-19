const myArray = [10, 11, 12, 13, 14, 15, 5555];
function getMaxNumber (numbers){
    let max = numbers [0]; // on declare une variable max on l'initialise avec // numbers [0]
// On parcourt le tableau numbers avec un boucle for 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
return max;
}
const result = getMaxNumber (myArray);
console.log(result);
