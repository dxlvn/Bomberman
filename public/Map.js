// Representation de la map Bomber's
class Map {
  constructor(x, y, size_case, canvas) {
    //Regle la taille du canvas
    canvas.width = x * size_case;
    canvas.height = y * size_case;
    this.height = y;
    this.width = x;
    this.size = size_case;
    this.p = [];
    //Initialise le plateau
    for (let i = 0; i < this.width; i++) {
      this.p[i] = [];
      for (let j = 0; j < this.height; j++) {
        //Crée un motif de blocs
        if (i % 2 == 1 && j % 2 == 1) {
          this.p[i][j] = new Case(i,j, this.size, false);
        } else {
          this.p[i][j] = new Case(i,j, this.size, true);
        }
      }
    }
  }

  isCaseLibre(j, x, y) {
    //On vérifie si ce n'est pas hors limite
    if ( x < 0 || y < 0 ||
      x / this.size > this.width ||
      y / this.size > this.height ) {
      return false;
    }
    //Vérifie que la case n'est pas occupée
    if (this.p[Math.floor(x / this.size)][Math.floor(y / this.size)].isFranchissable()) {
      return true;
    }
    return false;
  }

  //Dessiner la map
  draw() {
    // Initialisation des variables du crayon
    context.lineWidth = 2;
    context.strokeStyle = "black";

    //Dessin des cases une par une
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j < this.height; j++) {
        if (this.p[i][j].isFranchissable()) {
          context.fillStyle = "white";
        } else {
          context.fillStyle = "black";
        }
        this.p[i][j].draw();
      }
    }
  }
}