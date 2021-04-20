//CLasse representant un joueur
class Joueur {
  constructor(x, y, dep, size, m) {
    this.x = x;
    this.y = y;
    //Taille d'un deplacement (en pixel)
    this.dep = dep;
    //Taille du joueur (en pixel)
    this.size = size;
    this.map = m;
  }

  makeMove(keys) {
    console.log("Keys : " + keys);
    if (keys[keys.length - 1] == "ArrowLeft") {
      this.move(-1, 0);
    } else if (keys[keys.length - 1] == "ArrowRight") {
      this.move(1, 0);
    } else if (keys[keys.length - 1] == "ArrowUp") {
      this.move(0, -1);
    } else if (keys[keys.length - 1] == "ArrowDown") {
      this.move(0, 1);
    }
  }

  //Deplace le joueur dans le x et y indiqué
  move(xDep, yDep) {
    console.log("Coord " + this.x + " " + this.y);
    console.log(xDep + " " + yDep);
    console.log("Cible " + xDep * this.dep + " " + yDep * this.dep);
    if (
      //Teste le coin haut gauche
      this.map.isCaseLibre(this, this.x + xDep * this.dep, this.y + yDep * this.dep) &&
      //Teste le coin haut doite
      this.map.isCaseLibre(this, this.x + xDep * this.dep + this.size, this.y + yDep * this.dep) &&
      //Teste le coin bas gauche
      this.map.isCaseLibre(this, this.x + xDep * this.dep, this.y + yDep * this.dep + this.size) &&
      //Teste le coin bas droite
      this.map.isCaseLibre(this, this.x + xDep * this.dep + this.size, this.y + yDep * this.dep + this.size)
    ) {
      this.x += xDep * this.dep;
      this.y += yDep * this.dep;
    }
    console.log(this.x + " " + this.y);
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