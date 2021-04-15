class Bomb {
  constructor(x,y,r,t) {
    this.x = x;
    this.y = y;
    this.t = t;
  }
  
  
  
  draw(){
    var canvas = document.getElementById('circle');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d'); 
      var X = 7;  // canvas.width
      var Y = 0;  // canvas.height
      var R = 5;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#FF0000';
      ctx.stroke();
      ctx.fill(); //canvas
    }
  }

}