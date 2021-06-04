function makeModele() {
	var INTERVAL = 30;
	var spacePressed = false;
	var keys = [];

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	// appel pour l'affichage
	var nbCaseX = 21;
	var nbCaseY = 15;
	nbCaseX += 2;
	nbCaseY += 2;

	var screenHeight = window.innerHeight * (4/5);
	var screenWidth = window.innerWidth * (4/5);


	var tailleCase1 = screenHeight / nbCaseY;
	var tailleCase2 = screenWidth / nbCaseX;

	var tCaseFinale = Math.floor(tailleCase1);
	if (tailleCase1 >tailleCase2) {
	  tCaseFinale = Math.floor(tailleCase2);
	}

	var map = new Map(nbCaseX, nbCaseY, tCaseFinale, canvas); //tCaseFinale

	var j1 = new Joueur(1, 1, "Joueur 1", map);

	var j2 = new Joueur(nbCaseX - 2, 1, "Joueur 2", map);

	var j3 = new Joueur(1, nbCaseY - 2, "Joueur 3", map);

	var j4 = new Joueur(nbCaseX - 2, nbCaseY - 2, "Joueur 4", map);

	var joueurs = [j1,j2,j3,j4];

	var modele = new Modele(map, joueurs);
	return modele;
}

function frame() {
  j1.makeMove(keys);
  if (spacePressed) {
    j1.dropBomb()
  }
  modele.compute();
  modele.draw();
}

function start() {
	setInterval(frame, INTERVAL);
}

let modele = makeModele();
modele.draw();
