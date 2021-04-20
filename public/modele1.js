const canvas = document.getElementById("map");
// get the context
var context = canvas.getContext("2d");

//CLasse representant un joueur
class Personnage {
  constructor(x, y, dep, size) {
    this.x = x;
    this.y = y;
    //Taille d'un deplacement (en pixel)
    this.dep = dep;
    //Taille du joueur (en pixel)
    this.size = size;
  }

  //Deplace le joueur dans le x et y indiqué
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

// representation de la map Bomber's
class Map {
  constructor(x, y, size_case) {
    canvas.width = x * size_case;
    canvas.height = y * size_case;
    this.height = y;
    this.width = x;
    this.size = size_case;
    this.p = [];
    for (let i = 0; i < this.width; i++) {
      this.p[i] = [];
      for (let j = 0; j < this.height; j++) {
        this.p[i][j] = 0;
        if (i % 2 == 1 && j % 2 == 1) {
          this.p[i][j] = 1;
        }
      }
    }
  }

  isCaseLibre(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      (x + perso1.size) / this.size > this.width ||
      (y + perso1.size) / this.size > this.height
    ) {
      return false;
    }
    //Teste le coin haut gauche
    if (this.p[Math.floor(x / this.size)][Math.floor(y / this.size)] == 1) {
      return false;
      //Teste le coin haut droite
    } else if (
      this.p[Math.floor((x + perso1.size) / this.size)][
        Math.floor(y / this.size)
      ] == 1
    ) {
      return false;
      //Teste le coin bas gauche
    } else if (
      this.p[Math.floor(x / this.size)][
        Math.floor((y + perso1.size) / this.size)
      ] == 1
    ) {
      return false;
      //Teste le coin bas droite
    } else if (
      this.p[Math.floor((x + perso1.size) / this.size)][
        Math.floor((y + perso1.size) / this.size)
      ] == 1
    ) {
      return false;
    }
    return true;
  }

  //dessiner la map
  draw() {
    // initialisation des variables
    context.lineWidth = 2;
    context.fillStyle = "white";
    context.strokeStyle = "black";

    // Création des cases ensuite elle les remplit
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j < this.height; j++) {
        var x_case = i * this.size;
        var y_case = j * this.size;
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

// elle traite le event qu'elle reçoit et selon le code de la touche
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

// appel pour l'affichage
var perso1 = new Personnage(0, 0, 4, 15);
var map1 = new Map(11, 15, 20);
var modele = new Modele(map1, perso1);

window.addEventListener("keydown", doKeyDown, true);

modele.draw();
