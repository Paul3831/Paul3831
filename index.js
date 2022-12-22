const readline = require("readline"); //facilite la saisie et la lecture de la sortie donnée par l’utilisateur
var colors = require('colors');
const rl = readline.createInterface({ 
  input: process.stdin,   //la source d’entrée
  output: process.stdout    //la source de sortie 
});
console.log("De façon générale, la pierre bat les ciseaux (en les émoussant), les ciseaux battent la feuille (en la coupant), la feuille bat la pierre (en l'enveloppant).\n".red);
rl.question("Pierre, papier ou ciseaux?\n".yellow, function (res) { //fonction qui prend en paramètre la réponse
var computerChoice = Math.random(); //un nombre flottant pseudo-aléatoire, généré entre 0 (inclus) et 1 (exclu)
if (computerChoice < 0.34) {
	computerChoice = "pierre";
} else if(computerChoice <= 0.67) {
	computerChoice = "papier";
} else {
	computerChoice = "ciseaux";
}
console.log("Computer :".blue, computerChoice);
console.log(compare(res,computerChoice));
process.exit(0);
});
var compare=function(choice1,choice2){
    if(choice1===choice2){  //permet de spécifier un bloc de code à exécuter
        return "Le resultat est une egalite!".red;
    }
    else if(choice1==="pierre"){ //permet de spécifier une nouvelle condition à tester 
        if(choice2==="ciseaux"){
            return "Pierre gagne!".green; //l'exécution de la fonction qui se termine
        }
        else if(choice2==="papier"){
            return "Papier gagne!".green;
        }
    }
    else if(choice1==="papier"){
        if(choice2==="ciseaux"){
            return "Ciseaux gagne!".green;
        }
        else if(choice2==="pierre"){
            return "Papier gagne!".green;
        }
    }
    else if(choice1==="ciseaux"){
        if(choice2==="papier"){
            return "Ciseaux gagne!".green;
        }
        else if(choice2==="pierre"){
            return "Pierre gagne!".green;
            
            }
        }
    }  