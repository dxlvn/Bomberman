
//CLasse representant un joueur
class Bomb {
  constructor(x, y, t, m) {
    this.r = m.size/2;
    this.x = x * this.m.size + this.r;
    this.y = y * this.m.size + this.r;
    this.t = t;
    this.map = m;
    this.audioExplosion = new Audio('https://cdn.glitch.com/78539be0-7261-4593-9d5a-b8d0ccd26f37%2FaudioExplosion%20(mp3cut.net).mp3?v=1619046058517');
  }

  
  draw() {
    this.t--;
    this.r += 0.3; 
    //affichage toutes les 25ms et explosion après 60s (69*25ms)
    
    //Animation un et deux intervalle(s) avant l'explosion 
    if (this.t == 68 || this.t == 67){
      context.beginPath();
      context.fillStyle= "#FEE65B";  
      context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
      context.fill();
    } else{
      context.beginPath();
      context.fillStyle= "#F15902";  
      context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
      context.fill();
    } 
  }
}
