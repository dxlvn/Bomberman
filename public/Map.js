// Representation de la map Bomber's
class Map {
  constructor(x, y, size_case, canvas) {
    //Regle la taille du canvas
    canvas.width = x * size_case;
    canvas.height = y * size_case;
    this.height = y;
    this.width = x;
    this.size = size_case;
    this.p = [];
    //Initialise le plateau
    for (let i = 0; i < this.width; i++) {
      this.p[i] = [];
      for (let j = 0; j < this.height; j++) {
        //Crée un motif de blocs
        if ((i == 0 || j == 0 || i == x - 1 || j == y - 1) || ((i+1) % 2 == 1 && (j+1) % 2 == 1)) {
          this.p[i][j] = new Case(this, i, j, this.size, false, false);
        } else {
          if(Math.random() > 0.5) {
            this.p[i][j] = new Case(this, i, j, this.size, true, false);
          } else {
            this.p[i][j] = new Case(this, i, j, this.size, false, true);
          } 
        }
      }
    }
  
        this.p[1][1] = new Case(this,1,1, this.size,true,false);
        this.p[2][1] = new Case(this,2,1, this.size,true,false);
        this.p[1][2] = new Case(this,1,2, this.size,true,false);
    
        this.p[x-2][y-2] = new Case(this,x-2,y-2, this.size,true,false);
        this.p[x-3][y-2] = new Case(this,x-3,y-2, this.size,true,false);
        this.p[x-2][y-3] = new Case(this,x-2,y-3, this.size,true,false);
    
        this.p[1][y-2] = new Case(this,1,y-2, this.size,true,false);
        this.p[2][y-2] = new Case(this,2,y-2, this.size,true,false);
        this.p[1][y-3] = new Case(this,1,y-3, this.size,true,false);
    /*
        this.p[1][y-2] = new Case(this,1,y-2, this.size,true,false);
        this.p[2][y-2] = new Case(this,2,y-2, this.size,true,false);
        this.p[1][y-3] = new Case(this,1,y-3, this.size,true,false);
    */
        this.p[x-2][1] = new Case(this,x-2,1, this.size,true,false);
        this.p[x-3][1] = new Case(this,x-3,1, this.size,true,false);
        this.p[x-2][2] = new Case(this,x-2,y, this.size,true,false);
    
    
        
    
  }
  
  isCaseValide(x, y) {
    //console.log("x: " + x + "   y: " + y);
    if ( x < 0 || y < 0 || x >= this.width || y >= this.height ) {
      return false;
    }
    return true;
  }

  isCaseLibre(x, y) {
    //On vérifie si ce n'est pas hors limite
    //if (!this.isCaseValide(x, y)) {
    //  return false;
    //}
    //Vérifie que la case n'est pas occupée
    return this.p[x][y].isFranchissable();
  }
  
  compute() {
    let modif = false;
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j < this.height; j++) {
        this.p[i][j].compute();
      }
    }
  }

  //Dessiner la map
  draw() {
    // Initialisation des variables du crayon
    context.lineWidth = 2;
    context.strokeStyle = "black";

    //Dessin des cases une par une
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j < this.height; j++) {
        this.p[i][j].draw();
      }
    }
  }
}