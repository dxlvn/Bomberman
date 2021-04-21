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

var spacePressed = false;
var keys = [];
var bombs = [];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// appel pour l'affichage
var map1 = new Map(11, 15, 20, canvas);
var perso1 = new Joueur(0, 0, 2, 15, map1);
var modele = new Modele(map1, perso1, bombs);


//window.addEventListener("keydown", doKeyDown, true);
function frame() {
  perso1.makeMove(keys);
  console.log(spacePressed);
  if (spacePressed) {
    bombs.push(new Bomb(perso1.x, perso1.y, 100, map1));
  }
  modele.draw();
}

modele.draw();

setInterval(frame, 30);
