const canvas = document.getElementById("map");
// get the context
var context = canvas.getContext("2d");

class Personnage {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  move(xDep, yDep) {
    this.x += xDep;
    this.y += yDep;
  }
  
  draw() {
    // set fill and stroke styles
    context.lineWidth = 2;
    context.fillStyle = "red";
    context.strokeStyle = "red";

    // draw a rectangle with fill and stroke
    context.fillRect(this.x, this.y, this.size, this.size);
  }
}

// representation de notre map Bomber's
class Map {
  constructor(x, y, size_case) {
    this.height = x;
    this.width = y;
    this.p = [];
    for (let i = 0; i < this.height; i++) {
      this.p[i] = [];
      for (let j = 0; j < this.width; j++) {
        let 
        if
        this.p[i][j] = this.i * 100 + this.j;
      }
    }
    this.size = size_case;
  }
  //dessiner la map
  draw() {
    // set fill and stroke styles
    context.lineWidth = 2;
    context.fillStyle = "white";
    context.strokeStyle = "black";

    // draw a rectangle with fill and stroke
    for (var i = 0; i < this.height; i++) {
      for (var j = 0; j < this.height; j++) {
        var x_case = j * this.size;
        var y_case = i * this.size;
        context.fillRect(x_case, y_case, this.size, this.size);
        context.strokeRect(x_case, y_case, this.size, this.size);
        console.log(this.p[i][j]);
      }
    }
  }
}


// representation de notre map Bomber's
class Modele {
  constructor(m, p) {
    this.map = m;
    this.perso = p;
  }
  
  //dessiner la map
  draw() {
    this.map.draw();
    this.perso.draw();
  }
}

// appel pour l'afficher
var perso1 = new Personnage(0, 0, 15);
var map1 = new Map(10, 10, 20);
var modele = new Modele(map1, perso1);

function doKeyDown(evt){
    switch (evt.keyCode) {
      case 38:  /* Up arrow was pressed */
        perso1.move(0, -1);
        modele.draw();
    break;
    case 40:  /* Down arrow was pressed */
        perso1.move(0, 1);
        modele.draw();
    break;
    case 37:  /* Left arrow was pressed */
        perso1.move(-1, 0);
        modele.draw();
    break;
    case 39:  /* Right arrow was pressed */
        perso1.move(1, 0);
        modele.draw();
    break;
    }
}

window.addEventListener('keydown',doKeyDown,true);

modele.draw();