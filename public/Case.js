class Case {
  constructor(x, y, size, obstacle) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.obstacle = obstacle;
    this.bomb = null;
    this.bombExplosion = 0;
    this.bombDirection = "";
  }
  
  isFranchissable() {
    return this.obstacle;
  }
  
  draw() {
    if (this.bombExplosion > 0) {
      context.fillStyle = "#FF0A2180";
      context.strokeStyle = "#FF0A2180";
    } else {
      if (this.isFranchissable()) {
          context.fillStyle = "white";
        } else {
          context.fillStyle = "black";
        }
      context.strokeStyle = "black";
    }
    context.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    context.strokeRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
  
}