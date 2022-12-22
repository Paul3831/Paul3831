//cumuler les conditions 
if (i === "pierre") {
} else if (i === "feuille") {
} else if (i === "ciseaux") {
} else {
  alert("entrez pierre, feuille, ciseaux")
}

//vérifier si la variable n'est aucune de ces valeurs !
if( i != "pierre" && i != "feuille" && i != "ciseaux") {
  alert("Entrez: pierre, feuille ou ciseaux");
}

//une grande répétition lors de la comparaison du choix du joueur et de l'IA pour déterminer le gagnant, il serait là aussi bien de créer des fonctions à appeler :

function win() { 
  console.log("Vous avez gagné");
  user_point++;
}

function loose() {
  console.log("L'IA a gagné");
  ia_point++;
}
