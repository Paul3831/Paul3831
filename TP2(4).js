//4 Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.

const fs = require("fs");

let directory_name = "C:\\js";  // Chemin du repertoire en question

let filenames = fs.readdirSync(directory_name);

console.log("\nFichiers dans le repertoire : ");
filenames.forEach((file) => {
    console.log("File:", file);  //Lister les fichiers
});