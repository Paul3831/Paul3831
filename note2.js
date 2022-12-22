//ceci est un tableau 

const myArray = [23432, 33243, 234234, 342121313, 24234234324, 4324234, 24324];

// l'index est la position d'un element dans le tableau
//le premier index est l'index 0 
console.log(myArray.length);

//boucle for
for (let index = 0; index < myArray.length; index++) {
    const arrayContent = myArray[index];
    console.log (arrayContentAtIndex);
}

//ecrire une fonction qui prend un tableau de nombre en parametre et qui retourne la plus grand nombre du tableau
/**
 * 
 * @param {*} numbers : an array of number
 */
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

const result = getMaxNumber (someOtherArray);
console.log(result);