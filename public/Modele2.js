// Representation deu jeu Bomber's
class Modele {
  constructor(m, joueurs){ 
    this.map = m;
    this.joueurs = joueurs;
  }

  //Dessiner la map et le joueur
  draw() {
    
    this.map.draw();
    
    for (let i = 0; i < this.joueurs.length; i++) {
      this.joueurs[i].perso.draw();
      
      for (let j = this.joueurs[i].bombs.length - 1; j >= 0; j--) {
        this.joueurs[i].bombs[j].draw();
        
        for (var k = 0; k < this.joueurs.length; k++) {
          var boom = Math.pow(this.joueurs[i].bombs[j].x-this.joueurs[k].perso.x,2)+Math.pow(this.joueurs[i].bombs[j].y-this.joueurs[k].perso.y,2) < Math.pow(this.joueurs[i].bombs[j].r,2);
          if(this.joueurs[i].bombs[j].isExploding && boom){
            this.joueurs[k].perso.vie--;
            if (this.joueurs[k].perso.vie == 0){
              alert("Game over");
            }
          }
        }
        
        if (this.joueurs[i].bombs[j].t < 0) {
          this.joueurs[i].bombs.splice(j,1);
        }
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