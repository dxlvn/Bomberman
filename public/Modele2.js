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


export default Modele;