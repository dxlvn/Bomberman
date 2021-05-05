// Representation deu jeu Bomber's
class Modele {
  constructor(m, joueurs){ 
    this.map = m;
    this.joueurs = joueurs;
  }
  
  compute() {
    for (let i = 0; i < this.joueurs.length; i++) {
      this.joueurs[i].compute();
      
      for (let j = this.joueurs[i].bombs.length - 1; j >= 0; j--) {
        this.joueurs[i].bombs[j].compute();
        
        for (var k = 0; k < this.joueurs.length; k++) {
          var boom = Math.pow(this.joueurs[i].bombs[j].x-this.joueurs[k].x,2)+Math.pow(this.joueurs[i].bombs[j].y-this.joueurs[k].y,2) < Math.pow(this.joueurs[i].bombs[j].r,2);
          if(this.joueurs[i].bombs[j].isExploding && boom){
            
            this.joueurs[k].prendDegats();
            console.log("Vie "+this.joueurs[k].name+" : "+this.joueurs[k].vie);
            if (this.joueurs[k].vie == 0){
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

  //Dessiner la map et le joueur
  draw() {
    
    this.map.draw();
    
    for (let i = 0; i < this.joueurs.length; i++) {
      this.joueurs[i].draw();
      
      for (let j = this.joueurs[i].bombs.length - 1; j >= 0; j--) {
        this.joueurs[i].bombs[j].draw();
      }
    }
  }
}