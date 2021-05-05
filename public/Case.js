class Case {
  constructor(x, y, size, obstacle) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.obstacle = obstacle;
    this.bomb = null;
    this.bombExplosion = 0;
    this.bombTime = 0;
    this.bombTimeMax = 10;
    this.bombDirection = [0,0];
  }
  
  isFranchissable() {
    return this.obstacle;
  }
  
  compute() {
    if (this.bombExplosion > 0) {
      if (this.bombTime < this.bombTimeMax) {
        this.bombTime ++;
      } else {
        this.bombExplosion = 0;
        this.bombTime = 0;
        this.bombDirection = [0,0];
      }
    }
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