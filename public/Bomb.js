class Bomb {
  constructor(x, y, r, t, m) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.map = m;
  }

  draw() {
    if (t)
    context.beginPath();
    context.arc(this.x * this.map.size, this.y * this.map.size, this.map.size, 0, 2 * Math.PI, false);
    context.lineWidth = 3;
    context.strokeStyle = "#FF0000";
    context.stroke();
    context.fill(); //canvas
    this.t --;
    if (this.t == 0) {
      this.explode();
    }
  }

  disappear() {
    context.beginPath();
    context.arc(this.x * this.map.size, this.y * this.map.size, this.map.size, 0, 2 * Math.PI, false);
    context.lineWidth = 3;
    context.strokeStyle = "#FF0000";
    context.stroke();
    context.fill(); //canvas
    // faire exploser...
    /*                  *
    Faire exploser    * * *  (x,y) centre
    suivant ce schema   *
    
    explose (x,y) if isCaseLibre
    explose (x+1,y) if isCaseLibre
    explose (x-1,y) if isCaseLibre 
    explose (x,y+1) if isCaseLibre  
    explose (x,y-1) if isCaseLibre
    // rajouter les dégats sur la vie des persos quand on l'aura fait
   
    context.clear();
    context.closePath();
    */
  }
}
