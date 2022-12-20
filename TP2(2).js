//2 Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

const fs = require('fs');

C = 'PM';  //Nouveau contenue du fichier texte

fs.writeFile('text.txt', C, function (err) {
    if (err) throw err;
    console.log('It saved');
});