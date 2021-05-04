//CLasse representant un joueur
class Joueur {
  constructor(x, y, m) {
    this.caseX = 0;
    this.caseY = 0;
    this.x = x;
    this.y = y;
    //Taille d'un deplacement (en pixel)
    this.dep = m.size/12;
    //Taille du joueur (en pixel)
    this.size = m.size - m.size/10;
    this.map = m;
    this.vie = 3;
    this.invinsibilite = 0;
    //this.varm = document.getElementById("image");
    //this.blood = 
  }
  
  

  makeMove(keys) {
    //Regarde les deux dernieres touches enfoncées
    let moveDep = [[0,0],[0,0]]
    let nbKeys =(keys.length > 1) ? 2 : 1;
    //let direction = null;
    for (let i = 0; i < nbKeys; i++) {
      if (keys[keys.length - i - 1] == "ArrowLeft") {
        moveDep[i][0] = -1;
        //direction = "left";
      } else if (keys[keys.length - i - 1] == "ArrowRight") {
        moveDep[i][0] = 1;
        //direction = "right";
      } else if (keys[keys.length - i - 1] == "ArrowUp") {
        moveDep[i][1] = -1;
        //direction = "up";
      } else if (keys[keys.length - i - 1] == "ArrowDown") {
        moveDep[i][1] = 1;
        //direction = "down";
      }
    }
    //On fait le délacement de la derniere touche
    this.move(moveDep[0][0], moveDep[0][1]);
    //Et si celui de l'avant deniere n'est pas contradictoire
    if(Math.abs(moveDep[0][0])!= Math.abs(moveDep[1][0]) &&
      Math.abs(moveDep[0][1])!= Math.abs(moveDep[1][1])) {
      //On fait aussi le deplecement de l'avant derniere (diagonale)
      this.move(moveDep[1][0], moveDep[1][1]);
    }
  }

  //Deplace le joueur dans le x et y indiqué
  //Possibilité d'ajouter un parametre pour la direction
  move(xDep, yDep) {
    let decalageCaseX = this.caseX + xDep * this.dep > this.map.size;
    let decalageCaseY = this.caseY + yDep * this.dep > this.map.size;
    //Test de collision
    if (
      //Teste le coin haut gauche
      this.map.isCaseLibre(this, this.x, this.y + decalageCaseY) &&
      //Teste le coin haut doite
      this.map.isCaseLibre(this, this.x + decalageCaseX, this.y) &&
      //Teste le coin bas gauche
      this.map.isCaseLibre(this, this.x, this.y + decalageCaseY) &&
      //Teste le coin bas droite
      this.map.isCaseLibre(this, this.x + decalageCaseX, this.y + decalageCaseY)
    ) {
      this.caseX += xDep * this.dep;
      this.caseY += yDep * this.dep;
    }
  }
  
  prendDegats() {
    if (this.vie > 0 && this.invinsibilite == 0) {
      this.vie--;
      this.invinsibilite = 12;
    } else if (this.vie == 0) {
      this.vie--;
    }
  }

  draw() {
    if (this.invinsibilite > 0) {
      this.invinsibilite--;
    }
    // set fill and stroke styles
    context.lineWidth = 2;
    context.fillStyle = "red";
    context.strokeStyle = "red";

    // draw a rectangle with fill and stroke
    //context.fillRect(this.x, this.y, this.size, this.size);
    this.varm = document.getElementById("image");
    context.drawImage(this.varm,this.x, this.y,this.size, this.size);
  }
}