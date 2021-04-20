// Representation deu jeu Bomber's
class Modele {
  constructor(m, p){ 
    this.map = m;
    this.perso = p;
  }

  //Dessiner la map et le joueur
  draw() {
    
    this.map.draw();
    this.perso.draw();
    /*
    var bombe1 = new Bomb(40, 42, 80, 10);
    bombe1.draw();
    */
  }
}