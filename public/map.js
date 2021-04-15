/*// representation de la map Bomber's
class Map {
  constructor(x, y, size_case) {
    this.height = x;
    this.width = y;
    this.size = size_case;
  }
  //dessiner la map
  draw() {
    const canvas = document.getElementById("map");
    if (!canvas.getContext) {
      return;
    }

    // get the context
    let context = canvas.getContext("2d");

    // definir les contours
    context.lineWidth = 2;
    context.fillStyle = "white";
    context.strokeStyle = "black";

    // dessiner un carré avec un fond et un contour 
    for (var i = 0; i < this.height; i++) {
      for (var j = 0; j < this.height; j++) {
        var x_case = j * this.size;
        var y_case = i * this.size;
        context.fillRect(x_case, y_case, this.size, this.size);
        context.strokeRect(x_case, y_case, this.size, this.size);
      }
    }
  }
}
// appel pour l'affichage
let map1 = new Map(10, 10, 20);
map1.draw();
*/