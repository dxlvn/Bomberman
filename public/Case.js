class Case {
  constructor(m, x, y, size, franchissable) {
    this.map = m;
    this.x = x;
    this.y = y;
    this.size = size;
    this.franchissable = franchissable;
    this.bombExplosion = 0;
    this.bombDirection = [0, 0];
    this.bombTime = 0;
    this.bombTimeMax = 10;
  }

  isFranchissable() {
    return this.franchissable;
  }

  addBombExplosion(force, x, y) {
    if (this.franchissable && force > 0) {
      this.bombExplosion = force;
      if (x == 0 && y == 0) {
        for (let i = 0; i < 4; i++) {
          let directionX = i%2;
          if (i == 3) {
            directionX = -directionX;
          }
          let directionY = (i+1)%2;
          if (i == 2) {
            directionY = -directionY;
          }
          if (this.map.isCaseValide(this.x + directionX, this.y + directionY)) {
            this.map.p[this.x + directionX][this.y + directionY].addBombExplosion(force -1, directionX, directionY);
          }
        }
      } else {
        if (this.map.isCaseValide(this.x + x, this.y + y)) {
            this.map.p[this.x + x][this.y + y].addBombExplosion(force -1, x, y);
          }
      }
    }
  }

  compute() {
    if (this.bombExplosion > 0) {
      if (this.bombTime < this.bombTimeMax) {
        this.bombTime++;
      } else {
        this.bombExplosion = 0;
        this.bombTime = 0;
        this.bombDirection = [0, 0];
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
    context.fillRect(
      this.x * this.size,
      this.y * this.size,
      this.size,
      this.size
    );
    context.strokeRect(
      this.x * this.size,
      this.y * this.size,
      this.size,
      this.size
    );
  }
}
