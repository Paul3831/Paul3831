//3 Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.

const http = require('http');
http.createServer(function (req, res) {
    console.log(`${req.method} ${req.url}`);
    const fs = require('fs');
    fs.readFile('paul.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        res.end(data); //lecture du fichier paul.txt
    })

}).listen(9000); //l'adresse http://localhost:9000/

console.log('Le serveur écoute le port 9000');