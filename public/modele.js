const canvas = document.getElementById("map");
// get the context
var context = canvas.getContext("2d");

class Personnage {
  constructor(x, y, dep, size) {
    this.x = x;
    this.y = y;
    this.dep = dep;
    this.size = size;
  }

  move(xDep, yDep) {
    if (map1.isCaseLibre(this.x + xDep, this.y + yDep)) {
      this.x += xDep;
      this.y += yDep;
    }
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
    canvas.width = y * size_case;
    canvas.height = x * size_case;
    this.height = x;
    this.width = y;
    this.p = [];
    for (let i = 0; i < this.height; i++) {
      this.p[i] = [];
      for (let j = 0; j < this.width; j++) {
        let content = 0;
        if (i % 2 == 1 && j % 2 == 1) {
          content = 1;
        }
        this.p[i][j] = content;
      }
    }
    this.size = size_case;
  }
  
  isCaseLibre(x, y) {
    if (x < 0 || y < 0 || x > height || y > width) {
      return false;
    }
    console.log(Math.floor(x/20) + " " + Math.floor(y/20));
    console.log(Math.floor((x + perso1.size) /20)+ " " + Math.floor(y/20));
    if (this.p[Math.floor(x/20)][Math.floor(y/20)] == 1) {
      return false;
    } else if (this.p[Math.floor((x + perso1.size) /20)][Math.floor(y/20)] == 1) {
      return false;
    }
     else if (this.p[Math.floor(x /20)][Math.floor((y + perso1.size)/20)] == 1) {
      return false;
    }
     else if (this.p[Math.floor((x + perso1.size) /20)][Math.floor((y + perso1.size)/20)] == 1) {
      return false;
    }
    return true;
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
        if (this.p[i][j] == 1) {
          context.fillStyle = "black";
        } else {
          context.fillStyle = "white";
        }
        context.fillRect(x_case, y_case, this.size, this.size);
        context.strokeRect(x_case, y_case, this.size, this.size);
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



function doKeyDown(evt) {
  if (evt.keyCode == 37) {
    perso1.move(-perso1.dep, 0);
    modele.draw();
  } else if (evt.keyCode == 38) {
    perso1.move(0, -perso1.dep);
    modele.draw();
  } else if (evt.keyCode == 39) {
    perso1.move(perso1.dep, 0);
    modele.draw();
  } else if (evt.keyCode == 40) {
    perso1.move(0, perso1.dep);
    modele.draw();
  }
}

// appel pour l'afficher
var perso1 = new Personnage(0, 0, 4, 15);
var map1 = new Map(11, 11, 20);
var modele = new Modele(map1, perso1);

window.addEventListener("keydown", doKeyDown, true);

modele.draw();
