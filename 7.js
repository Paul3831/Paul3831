//- 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

const numbers = [13,8,2,21,5,1,3,1];
const byValue = (a,b) => a - b;
const sorted = [...numbers].sort(byValue);
console.log(sorted); // [1,1,2,3,5,8,13,21]