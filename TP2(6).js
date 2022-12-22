//Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

const os = require("os"); //Le module OS fournit des informations sur le système d’exploitation de l’ordinateur.

const homeDirectory = os.homedir();

console.log(`Votre répertoire personnel est: ${homeDirectory}`);