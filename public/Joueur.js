//CLasse representant un joueur
class Joueur {
  constructor(x, y, name, m) {
    this.name = name;
    this.x = x;
    this.subX = 0;
    this.y = y;
    this.subY = 0;
    this.size_case = m.size;
    //Taille d'un deplacement (en pixel)
    this.dep = m.size/12;
    
    this.seDeplace = false;
    this.direction = "down";
    this.frame = 1;
    this.frameMax = 4;
    this.interframe = 1;
    this.interframeMax = 4;
    
    //Taille du joueur (en pixel)
    this.size = m.size - m.size/10;
    this.map = m;
    
    this.vie = 3;
    this.shield = 0;
    
    this.nombreBombMax = 1;
    this.bombs = [];
    this.bombCooldown = 0;
    //this.varm = document.getElementById("image");
    //this.blood = 
  }
  
  convertSubToCoord(a, b) {
    if (b < 0) {
      return a - 1;
    } else if (b > this.size_case) {
      return a + 1;
    }
    return a;
  }
  
  dropBomb() {
    if (this.bombCooldown == 0) {
      var bombe = new Bomb(this.convertSubToCoord(this.x, this.subX + this.size/2), this.convertSubToCoord(this.y, this.subY + this.size/2), 100, this.map);
      this.bombs.push(bombe);
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
      this.direction = "left";
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
    let g = this.convertSubToCoord(this.x, this.subX + xDep * this.dep);
    let d = this.convertSubToCoord(this.x, this.subX + xDep * this.dep + this.size);
    let h = this.convertSubToCoord(this.y, this.subY + yDep * this.dep + this.size/4);
    let b = this.convertSubToCoord(this.y, this.subY + yDep * this.dep + this.size);
    //Test de collision
    if (
      //Teste le coin haut gauche
      this.map.isCaseLibre(g, h) &&
      //Teste le coin haut doite
      this.map.isCaseLibre(d, h) &&
      //Teste le coin bas gauche
      this.map.isCaseLibre(g, b) &&
      //Teste le coin bas droite
      this.map.isCaseLibre(d, b)
    ) {
      this.subX += xDep * this.dep;
      this.subY += yDep * this.dep;
      
      if (this.subX < 0) {
        this.x --;
        this.subX += this.size_case;
      } else if (this.subX > this.size_case) {
        this.x ++;
        this.subX -= this.size_case;
      }
      if (this.subY < 0) {
        this.y --;
        this.subY += this.size_case;
      } else if (this.subY > this.size_case) {
        this.y ++;
        this.subY -= this.size_case;
      }
    }
  }
  
  testPrendDegat() {
    if (this.vie > 0 && this.shield == 0) {
      let g = this.convertSubToCoord(this.x, this.subX);
      let d = this.convertSubToCoord(this.x, this.subX + this.size);
      let h = this.convertSubToCoord(this.y, this.subY + this.size/4);
      let b = this.convertSubToCoord(this.y, this.subY + this.size);
      if (this.map.p[g][h].bombExplosion > 0 || this.map.p[d][h].bombExplosion > 0 || this.map.p[g][b].bombExplosion > 0 || this.map.p[d][b].bombExplosion > 0) {
        this.vie--;
        this.shield = 12;
      }
    } else if (this.vie == 0) {
      this.vie--;
    }
  }
  
  compute() {
    this.testPrendDegat();
    if (this.bombCooldown > 0) {
      this.bombCooldown --;
    }
    if (this.shield > 0) {
      this.shield--;
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
    if (this.shield % 3 == 0) {
      context.drawImage(this.varm, this.x * this.size_case + this.subX, this.y * this.size_case + this.subY, this.size, this.size);
    }
  }
}