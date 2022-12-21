//- 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

const C = "Toutes les consonnes en majuscules";

MP = C.toUpperCase(); //passage des consonnes en majuscules

MP = MP.replaceAll("A", "a");

MP = MP.replaceAll("E", "e");

MP = MP.replaceAll("U", "u");

MP = MP.replaceAll("I", "i");

MP = MP.replaceAll("O", "o");

MP = MP.replaceAll("Y", "y");

console.log(MP);//TouTeS LeS CoNSoNNeS eN MaJuSCuLeS
