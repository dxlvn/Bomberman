class Bomb {

  
  constructor(x, y, t, m) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.map = m;
    this.audioExplosion = new Audio('https://cdn.glitch.com/78539be0-7261-4593-9d5a-b8d0ccd26f37%2FaudioExplosion.mp3?v=1619026394985');
    
  }

  draw() {
    
    if (this.t > 0) {
      context.beginPath();
      context.arc(this.x * this.map.size + this.map.size/2, this.y * this.map.size + this.map.size/2, this.map.size/2, 0, 2 * Math.PI, false);
      //window.alert(this.x+1, this.y);
      context.lineWidth = 3;
      context.fillStyle = "#FF9090";
      context.strokeStyle = "#FF0000";
      context.stroke();
      context.fill();
      
    } else if (this.t > -10) {
      this.explode();
      this.audioExplosion.play();
    }
    this.t--;
  }
  
  explode() {
    context.beginPath();
    context.arc(this.x * this.map.size + this.map.size/2, this.y * this.map.size + this.map.size/2, this.map.size / 2, 0, 2 * Math.PI, false);
    
    context.lineWidth = 3;
    context.strokeStyle = "#3399FF80";
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
