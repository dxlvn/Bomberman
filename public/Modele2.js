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
    console.log(this.bombs.length);
    if (this.bombs.length > 0) {
      for (let i = this.bombs.length - 1; i >= 0 ; i--) {
        if (this.bombs[i].t > -100) {
          this.bombs[i].draw();
        } else {
          this.bombs.splice(i, 1);
        }
      }
      for (let i = 0; i < this.bombs.length; i++) {
        this.bombs[i].draw();
      }
    }
  }
  
  /*//dessiner la map et les joueurs
  draw() {
    this.map.draw();
    var n_joueurs = this.joueurs.length;

    for (var i = 0; i < n_joueurs; i++) {
      this.joueurs[i].perso.draw();
      if (this.joueurs[i].bomb.print == true){
        this.joueurs[i].bomb.draw();
      }  
      
      if (this.joueurs[i].bomb.exploded == true){
        for (var j = 0; j < n_joueurs; j++) {
          var boom = Math.pow(this.joueurs[i].bomb.x-this.joueurs[j].perso.x,2)+Math.pow(this.joueurs[i].bomb.y-this.joueurs[j].perso.y,2)<Math.pow(this.joueurs[i].bomb.r,2);
          if(boom){
            this.joueurs[j].perso.chakra = this.joueurs[j].perso.chakra-1;
            console.log("Chakra joueur "+j+":"+this.joueurs[j].perso.chakra);
            if (this.joueurs[j].perso.chakra==0){
              alert("Game over");
            }
          }
          this.joueurs[i].bomb.exploded = false;
        }
      }
    }
  }*/
}