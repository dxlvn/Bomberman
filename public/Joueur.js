//CLasse representant un joueur
class Joueur {
  constructor(x, y, dep, size) {
    this.x = x;
    this.y = y;
    //Taille d'un deplacement (en pixel)
    this.dep = dep;
    //Taille du joueur (en pixel)
    this.size = size;
  }
  
  move(left, up, right, down) {
    console.log("ok");
    if (left) {
      this.move(-1, 0);
    } else if (right) {
      this.move(1, 0);
    } else if (up) {
      this.move(0, -1);
    } else if (down) {
      this.move(0, 1);
    }
  }

  //Deplace le joueur dans le x et y indiqué
  move(xDep, yDep) {
    if (map1.isCaseLibre(this.x + (xDep * this.dep), this.y + (xDep * this.dep))) {
      this.x += (xDep * this.dep);
      this.y += (xDep * this.dep);
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