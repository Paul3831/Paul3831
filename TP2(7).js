//Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

const { execFile } = require('child_process');

execFile("paul.bat", (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`Texte du fichier paul.bat:\n${stdout}`);
});