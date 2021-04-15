const canvas = document.getElementById("map");
// get the context
var context = canvas.getContext("2d");

// representation de la map Bomber's
class Modele {
  constructor(m, p) {
    this.map = m;
    this.perso = p;
  }

  //dessiner la map et le joueur
  draw() {
    this.map.draw();
    this.perso.draw();
  }
}

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    } else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    } else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    } else if(e.key == "Space" || e.key == "Space") {
      spacePressed == true;
    }
      //else if (evt.keyCode == 32) {
      //perso1.move(0, perso1.dep);
      //modele.draw();
      //alert("Bomb");
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    } else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    } else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// appel pour l'affichage
var perso1 = new Personnage(0, 0, 4, 15);
var map1 = new Map(11, 15, 20);
var modele = new Modele(map1, perso1);

//window.addEventListener("keydown", doKeyDown, true);

modele.draw();

function test() {
  console.log("Test");
}

function frame() {
  console.log(leftPressed, upPressed, rightPressed, downPressed);
  perso1.move(leftPressed, upPressed, rightPressed, downPressed);
  modele.draw();
}

setInterval(test, 300);