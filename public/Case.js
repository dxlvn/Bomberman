class Case {
  constructor(x, y, obstacle) {
    this.x = x;
    this.y = y;
    this.obstacle = obstacle;
    this.bomb = 0;
    this.bombDirection = "";
  }
  
  isFranchissable() {
    return this.obstacle;
  }
}