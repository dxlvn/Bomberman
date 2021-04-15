const canvas = document.getElementById("map");
// get the context
var context = canvas.getContext("2d");

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// appel pour l'affichage
var perso1 = new Personnage(0, 0, 4, 15);
var map1 = new Map(11, 15, 20);
var modele = new Modele(map1, perso1);

//window.addEventListener("keydown", doKeyDown, true);

modele.draw();


var context2 = canvas.getContext("2d"); 
var posx = 5;
var posy = 0;
context2.fillStyle = "#000000";
context2.arc(posx, posy, 50, 0, 2 * Math.PI);