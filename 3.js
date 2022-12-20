//- 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

function renvoie(str) {
    let chars = str.split('');
    for (let i = 0; i < chars.length; i++) {
       if (chars[i] === "a" || chars[i] === "e" || chars[i] === "i" || chars[i] === "o" || chars[i] === "u") {
          chars.splice(i, 1);
       }
    }
    return chars.join('');
 }
 console.log(renvoie("Stade Toulousain"));