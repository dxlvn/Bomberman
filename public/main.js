/*
import Map from "Map.js";
var j1 = require('./Joueur.js');
import Modele from "Modele2.js";
import Bomb from "Bomb.js";
import { keyDownHandler, keyUpHandler } from "Controlleur.js";
*/

const canvas = document.getElementById("map");
// get the context
var context = canvas.getContext("2d");

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;
var lastKeyPressed = [];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// appel pour l'affichage
var map1 = new Map(11, 15, 20, canvas);
var perso1 = new Joueur(0, 0, 2, 15, map1);
var modele = new Modele(map1, perso1);


//window.addEventListener("keydown", doKeyDown, true);
function frame() {
  perso1.makeMove(lastKeyPressed);
  if (leftPressed) {
    perso1.move(-1,0);
  } else if (upPressed) {
    perso1.move(0,-1);
  } else if (rightPressed) {
    perso1.move(1,0);
  } else if (downPressed) {
    perso1.move(0,1);
  }
  //perso1.move(leftPressed, upPressed, rightPressed, downPressed);
  modele.draw();
}

modele.draw();

setInterval(frame, 30);
