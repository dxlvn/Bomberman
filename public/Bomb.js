class Bomb {
  constructor(x, y, r, t) {
    this.x = x;
    this.y = y;
    this.t = t;
  }

  draw() {
    var canvas = document.getElementById("circle");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      var X = 7; // this.x
      var Y = 0; // this.y
      var R = 5; // this.r
      ctx.beginPath();
      ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#FF0000";
      ctx.stroke();
      ctx.fill(); //canvas
    }
  }

  disappear(ctx) {
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
   
   */
    ctx.clear();
    ctx.closePath();
  }
}