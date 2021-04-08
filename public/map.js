// representation de notre map Bomberman 
class Map {
  constructor(x, y) {
    this.height = x;
    this.width = y;
  }
//dessiner la map 
  draw() {
    const canvas = document.getElementById("map");
    if (!canvas.getContext) {
      return;
    }

    // get the context
    let context = canvas.getContext("2d");

    // set fill and stroke styles
    context.lineWidth=2;
    context.fillStyle = "#F0DB4F";
    context.strokeStyle = "red";

    // draw a rectangle with fill and stroke
    for( var i = 0; i < height; i++)
    context.fillRect(50, 50, 150, 100);
    context.strokeRect(50, 50, 150, 100);
  }
}
// appel pour l'afficher 
let map1 = new Map(10,10);
map1.draw();