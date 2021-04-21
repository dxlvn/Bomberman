// Representation deu jeu Bomber's
class Modele {
  constructor(m, p, bombs){ 
    this.map = m;
    this.perso = p;
    this.bombs = bombs;
  }

  //Dessiner la map et le joueur
  draw() {
    
    this.map.draw();
    this.perso.draw();
    for (let i = this.bombs.length - 1; i >= 0 ; i++) {
      if (this.bombs[i].t > -100) {
        this.bombs[i].draw();
      } else {
        this.bombs.splice(i, 1);
      }
    }
    for (let i = 0; i < this.bombs.length; i++) {
      this.bombs[i].draw();
    }
    /*
    var bombe1 = new Bomb(40, 42, 80, 10);
    bombe1.draw();
    */
  }
}