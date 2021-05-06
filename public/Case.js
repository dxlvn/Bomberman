class Case {
  constructor(m, x, y, size, franchissable, cassable) {
    this.map = m;
    this.x = x;
    this.y = y;
    this.size = size;
    this.franchissable = franchissable;
    if (cassable) {
      this.franchissable = false;
    }
    this.cassable = cassable;
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
          let directionX = i % 2;
          if (i == 3) {
            directionX = -directionX;
          }
          let directionY = (i + 1) % 2;
          if (i == 2) {
            directionY = -directionY;
          }
          if (this.map.isCaseValide(this.x + directionX, this.y + directionY)) {
            this.map.p[this.x + directionX][this.y + directionY].addBombExplosion(force - 1, directionX, directionY);
          }
        }
      } else {
        if (this.map.isCaseValide(this.x + x, this.y + y)) {
          this.map.p[this.x + x][this.y + y].addBombExplosion(force - 1, x, y);
        }
      }
    } else if (this.cassable) {
      this.cassable = false;
      this.franchissable = true;
      this.bombExplosion = 1;
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
    let varm;
    if (this.bombExplosion > 0) {
      varm = document.getElementById("explosion");
    }  else {
      if (this.isFranchissable()) {
        varm = document.getElementById("path");
      } else if (this.cassable) {
        varm = document.getElementById("breakable");
      } else {
        varm = document.getElementById("wall");
      }
      context.strokeStyle = "black";
    }
    context.drawImage(varm, this.x * this.size, this.y * this.size, this.size, this.size);
    /*context.fillRect(
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
    );*/
  }
}
