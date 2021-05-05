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
    context.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    context.strokeRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
  
}