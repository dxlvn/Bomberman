// representation de la map Bomber's
class Map {
  constructor(x, y, size_case, canvas) {
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

  isCaseLibre(j, x, y) {
    if (
      x < 0 ||
      y < 0 ||
      (x + j.size) / this.size > this.width ||
      (y + j.size) / this.size > this.height
    ) {
      return false;
    }
    
    //Teste le coin haut gauche
    if (this.p[Math.floor(x / this.size)][Math.floor(y / this.size)] == 1) {
      return false;
      //Teste le coin haut droite
    } else if (
      this.p[Math.floor((x + j.size) / this.size)][Math.floor(y / this.size)] ==
      1
    ) {
      return false;
      //Teste le coin bas gauche
    } else if (
      this.p[Math.floor(x / this.size)][Math.floor((y + j.size) / this.size)] ==
      1
    ) {
      return false;
      //Teste le coin bas droite
    } else if (
      this.p[Math.floor((x + j.size) / this.size)][
        Math.floor((y + j.size) / this.size)
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