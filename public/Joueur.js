//CLasse representant un joueur
class Joueur {
  constructor(x, y, name, m) {
    this.name = name;
    this.x = x;
    this.y = y;
    //Taille d'un deplacement (en pixel)
    this.dep = m.size/12;
    
    this.seDeplace = false;
    this.direction = "down";
    this.frame = 1;
    this.frameMax = 4;
    this.interframe = 1;
    this.interframeMax = 3;
    
    //Taille du joueur (en pixel)
    this.size = m.size - m.size/10;
    this.map = m;
    
    this.vie = 3;
    this.invinsibilite = 0;
    
    this.nombreBombMax = 1;
    this.bombs = [];
    this.bombCooldown = 0;
    //this.varm = document.getElementById("image");
    //this.blood = 
  }
  
  dropBomb() {
    if (this.bombCooldown == 0) {
      this.bombs.push(new Bomb(Math.floor((this.x + this.size/2) / this.map.size), Math.floor((this.y + this.size/2) / this.map.size), 100, this.map));
      this.bombCooldown = 100;
    }
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
    this.seDeplace = true;
    if (moveDep[0][0] == 1) {
      this.direction = "right";
    } else if (moveDep[0][0] == -1) {
      this.direction = "right";
    } else if (moveDep[0][1] == 1) {
      this.direction = "down";
    } else if (moveDep[0][1] == -1) {
      this.direction = "up";
    } else {
      this.seDeplace = false;
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
    //Test de collision
    if (
      //Teste le coin haut gauche
      this.map.isCaseLibre(this, this.x + xDep * this.dep, this.y + yDep * this.dep) &&
      //Teste le coin haut doite
      this.map.isCaseLibre(this, this.x + xDep * this.dep + this.size, this.y + yDep * this.dep) &&
      //Teste le coin bas gauche
      this.map.isCaseLibre(this, this.x + xDep * this.dep, this.y + yDep * this.dep + this.size) &&
      //Teste le coin bas droite
      this.map.isCaseLibre(this, this.x + xDep * this.dep + this.size, this.y + yDep * this.dep + this.size)
    ) {
      this.x += xDep * this.dep;
      this.y += yDep * this.dep;
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
  
  compute() {
    if (this.bombCooldown > 0) {
      this.bombCooldown --;
    }
    if (this.invinsibilite > 0) {
      this.invinsibilite--;
    }
  }

  draw() {
    // set fill and stroke styles
    context.lineWidth = 2;
    context.fillStyle = "red";
    context.strokeStyle = "red";

    // draw a rectangle with fill and stroke
    //context.fillRect(this.x, this.y, this.size, this.size);
    if (this.seDeplace) {
      this.varm = document.getElementById(this.direction + this.frame);
      this.interframe ++;
      if (this.interframe > this.interframeMax) {
        this.interframe = 1;
        this.frame ++;
      }
      if (this.frame > this.frameMax) {
        this.frame = 1;
      }
    } else {
      this.varm = document.getElementById(this.direction + "1");
    }
    context.drawImage(this.varm,this.x, this.y,this.size, this.size);
  }
}