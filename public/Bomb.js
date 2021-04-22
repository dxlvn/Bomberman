
//CLasse representant un joueur
class Bomb {
  constructor(x, y, t, m) {
    this.r = m.size/2;
    this.x = x * m.size + this.r;
    this.y = y * m.size + this.r;
    this.t = t;
    this.m = m;
    this.audioExplosion = new Audio('https://cdn.glitch.com/78539be0-7261-4593-9d5a-b8d0ccd26f37%2FaudioExplosion%20(mp3cut.net).mp3?v=1619046058517');
  }

  
  draw() {
    this.t--;
    if (t < 50)
    this.r += 0.3; 
    //affichage toutes les 25ms et explosion après 60s (69*25ms)
    
    //Animation un et deux intervalle(s) avant l'explosion 
    if (this.t < 10 && this.t >= 0){
      context.beginPath();
      context.fillStyle= "#FEE65B";  
      context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
      context.fill();
    } else if (this.t >= 10) {
      context.beginPath();
      context.fillStyle= "#F15902";  
      context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
      context.fill();
    } 
  }
}
