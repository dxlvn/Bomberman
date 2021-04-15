class Bomb {
  constructor(x, y, t,) {
    this.x = x;
    this.y = y;
    this.t = t;
}
  
  draw(){
    var canvas = document.getElementById('circle');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d'); 
      var X = canvas.width / 2;
      var Y = canvas.height / 2;
      var R = 45;
      ctx.beginPath();
      ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#FF0000';
      ctx.stroke();
      ctx.fill(cercle);
    }
  }
}
  


/*      

function draw()
  {
var canvas = document.getElementById('circle');
if (canvas.getContext)
{
var ctx = canvas.getContext('2d'); 
var X = canvas.width / 2;
var Y = canvas.height / 2;
var R = 45;
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 3;
ctx.strokeStyle = '#FF0000';
ctx.stroke();
}
}

*/

/*

// set fill and stroke styles
    context.lineWidth = 2;
    context.fillStyle = "grey";
    context.strokeStyle = "grey";
     
     var posx = 5;
     var posy = 0;
     context.fillStyle = "#000000";
     context.arc(posx, posy, 50, 0, 2 * Math.PI);

    // draw a rectangle with fill and stroke
    context.fillRect(this.x, this.y, this.size, this.size);
  }




*/
