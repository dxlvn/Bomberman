//CLasse representant un joueur
class Bomb {
    constructor(x, y, t, m) {
        this.size = m.size;
        this.x = x;
        this.y = y;
        this.t = t;
        this.m = m;
        this.force = 3;
        //this.audioExplosion = new Audio('https://cdn.glitch.com/78539be0-7261-4593-9d5a-b8d0ccd26f37%2FaudioExplosion%20(mp3cut.net).mp3?v=1619046058517');
    }
    
    compute() {
        this.t--;
        if (this.t == 0) {
            this.m.p[this.x][this.y].addBombExplosion(this.force, 0, 0);
        }
    }
}

module.exports = Bomb;
