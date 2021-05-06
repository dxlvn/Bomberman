// Representation deu jeu Bomber's
class Modele {
  constructor(m, joueurs){ 
    this.map = m;
    this.joueurs = joueurs;
  }
  
  compute() {
    this.map.compute();
    
    for (let i = 0; i < this.joueurs.length; i++) {
      this.joueurs[i].compute();
      
      for (let j = this.joueurs[i].bombs.length - 1; j >= 0; j--) {
        this.joueurs[i].bombs[j].compute();
        
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
      for (let j = this.joueurs[i].bombs.length - 1; j >= 0; j--) {
        this.joueurs[i].bombs[j].draw();
      }
    }
    
    for (let i = 0; i < this.joueurs.length; i++) {
      this.joueurs[i].draw();
      if (i == 0) {
        console.log(this.joueurs[0].x + " " + this.joueurs[0].y);
      }
      //console.log("Vie " + this.joueurs[i].name + " : " + this.joueurs[i].vie);
      if (this.joueurs[i].vie == 0) {
        alert("Game over  " + this.joueurs[i].name);
      }
    }
  }
}