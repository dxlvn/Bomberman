import Bomb from "Bomb.js";


// representation de la map Bomber's
class Modele {
  constructor(m, p){ 
    this.map = m;
    this.perso = p;
  }

  //dessiner la map et le joueur
  draw() {
    var bombe1 = new Bomb(40, 42, 80, 10);
    this.map.draw();
    this.perso.draw();
    bombe1.draw();
  }
}