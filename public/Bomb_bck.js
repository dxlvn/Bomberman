class Bomb {
  constructor(x, y, t, m) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.map = m;
    this.audioExplosion = new Audio('https://cdn.glitch.com/78539be0-7261-4593-9d5a-b8d0ccd26f37%2FaudioExplosion%20(mp3cut.net).mp3?v=1619046058517');
    
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
    context.fill();
  }
}