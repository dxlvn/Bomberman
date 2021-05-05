
/*
import * as Map from './Map.js'
import Joueur from "Joueur.js";
import Modele from "Modele2.js";
import Bomb from "Bomb.js";
import { keyDownHandler, keyUpHandler } from "Controlleur.js";*/

const canvas = document.getElementById("map");
// get the context
var context = canvas.getContext("2d");

var INTERVAL = 30;
var spacePressed = false;
var keys = [];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// appel pour l'affichage
var nbCaseX = 21;
var nbCaseY = 15;

var screenHeight = window.innerHeight * (4/5);
var screenWidth = window.innerWidth * (4/5);


var tailleCase1 = screenHeight / nbCaseY;
var tailleCase2 = screenWidth / nbCaseX;

var tCaseFinale = Math.floor(tailleCase1);
if (tailleCase1 >tailleCase2) {
  tCaseFinale = Math.floor(tailleCase2);
}

var map1 = new Map(nbCaseX, nbCaseY, tCaseFinale, canvas); //tCaseFinale
var j1 = new Joueur(0, 0, "Joueur 1", map1);

var j2 = new Joueur(1, 0, "Joueur 2", map1);

var joueurs = [j1,j2];

var modele = new Modele(map1, joueurs);


//window.addEventListener("keydown", doKeyDown, true);
function frame() {
  j1.makeMove(keys);
  if (spacePressed) {
    j1.dropBomb()
  }
  console.log(j1.x + " " + j1.y);
  modele.compute();
  modele.draw();
}

setInterval(frame, INTERVAL);
// la bombe ne se place pas comme il faut c'est tjrs en haut a gauche, le principe de la partie entiere et tt ne marche pas