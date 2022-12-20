//4 Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.

const fs = require("fs");

let directory_name = "C:\Users\IAD\Desktop\WORK";  // Chemin du repertoire en question

let filenames = fs.readdirSync(directory_name);

console.log("\nFichiers dans le repertoire : ");
filenames.forEach((file) => {
    console.log("File:", file);  //Lister les fichiers
});

//5 Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

const fs = require('fs');
namef = 'name.txt';
contenuef = 'Contenue!';
fs.writeFile(namef, contenuef, function (err) {
    if (err) throw err; console.log('Fichier créé !');
});