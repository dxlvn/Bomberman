class Case {
  constructor(m, x, y, size, obstacle) {
    this.map = m;
    this.x = x;
    this.y = y;
    this.size = size;
    this.obstacle = obstacle;
    this.bombExplosion = 0;
    this.bombDirection = [0, 0];
    this.bombTime = 0;
    this.bombTimeMax = 10;
  }

  isFranchissable() {
    return this.obstacle;
  }

  addBombExplosion(force, x, y) {
    this.bombExplosion = force;
    if (x == 0 && y == 0) {
      if (this.m.)
    }
    
    /*
    if (this.p[i][j].bombExplosion > 0) {
      let bombDirectionX = this.p[i][j].bombDirection[0];
      let bombDirectionY = this.p[i][j].bombDirection[1];
      if (bombDirectionX == 0 && bombDirectionY == 0) {
      } else {
        if (this.isCaseValide(i + bombDirectionX, j + bombDirectionY)) {
          this.p[i + bombDirectionX][j + bombDirectionY].bombExplosion =
            this.p[i][j].bombExplosion - 1;
          this.p[i + bombDirectionX][j + bombDirectionY].bombDirection = this.p[
            i
          ][j].bombDirection;
        }
      }
    }
    */
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
