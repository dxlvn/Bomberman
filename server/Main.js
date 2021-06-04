var Carte = require("./Carte.js");
var Modele = require("./Modele.js");

var newModele = function() {
	var nbCaseX = 21;
	var nbCaseY = 15;
	nbCaseX += 2;
	nbCaseY += 2;
	var tCaseFinale = 100;

	var map = new Carte(nbCaseX, nbCaseY, tCaseFinale);
	
	var modele = new Modele(map, []);
	return modele;
}

function frame() {
  j1.makeMove(keysJ1);
  if (spacePressed) {
    j1.dropBomb()
  }
  modele.compute();
}

function start() {
	var spacePressed = false;
	var keys = [];
	var INTERVAL = 30;
	setInterval(frame, INTERVAL);
}

module.exports = newModele(), start();
