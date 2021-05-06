
//CLasse representant un joueur
class Bomb {
  constructor(x, y, t, m) {
    this.r = m.size/2;
    this.x = x;
    this.y = y;
    this.t = t;
    this.m = m;
    this.force = 7;
    this.isExploding = false;
    this.audioExplosion = new Audio('https://cdn.glitch.com/78539be0-7261-4593-9d5a-b8d0ccd26f37%2FaudioExplosion%20(mp3cut.net).mp3?v=1619046058517');
  }
  
  compute() {
    this.t--;
  }
  
  draw() {
    if (this.t >= 0) {
      context.beginPath();
      context.arc(this.x * this.m.size + this.r, this.y * this.m.size + this.r, this.r, 0, 2*Math.PI);
      context.lineWidth = 3;
      //Animation un et deux intervalle(s) avant l'explosion 
      if (this.t >= 10) {
        context.fillStyle = "#4F94FF80";
        context.strokeStyle = "#3399FF80";
        context.stroke();
        context.fill();
      } else if (this.t == 0){
        this.m.p[this.x][this.y].addBombExplosion(this.force, 0, 0);
        this.audioExplosion.play();
        /*
        console.log("Bombe");
        this.r *= 1.11;
        this.isExploding = true;
        context.fillStyle = "#FF0A2180";
        context.strokeStyle = "#FF0A2180";
        */
      }
    }
  }
}
