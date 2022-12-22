//5 Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

const fs = require('fs');

namef = 'hey.txt';

contenuef = 'Hey !';

fs.writeFile(namef, contenuef, function (err) {
    
    if (err) throw err; console.log('Fichier créé !');
});