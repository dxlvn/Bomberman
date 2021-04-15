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

function frame() {
  perso1.move(leftPressed, upPressed, rightPressed, downPressed);
  modele.draw();
}