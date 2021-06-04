var Joueur = require("./Joueur.js");
var Carte = require("./Carte.js");

// Representation deu jeu Bomber's
class Modele {
    constructor(m, joueurs, room){
        this.map = m;
        this.room = room;
        this.joueurs = joueurs;
        this.listeTouche = {};
        this.listeEspace = {};
        let nbCaseX = this.map.width;
        let nbCaseY = this.map.height;
        this.espaceStart = [{"x":1, "y":1, "occupe":false},{"x":nbCaseX - 2, "y":1, "occupe":false},
            {"x":1, "y":nbCaseY - 2, "occupe":false},{"x":nbCaseX - 2, "y":nbCaseY - 2, "occupe":false}];
    }
                
	addJoueur(idJoueur, nomJoueur) {
		let espaceLibre ;
		for (let i = 0; i < this.espaceStart.length; i++) {
			console.log("i = " + i);
			if (!this.espaceStart[i]["occupe"]) {
				espaceLibre = this.espaceStart[i];
				this.espaceStart[i]["occupe"] = true;
				break;
			}
		}
		this.joueurs.push(new Joueur(espaceLibre["x"], espaceLibre["y"], nomJoueur, idJoueur, this.map));
		this.listeTouche[idJoueur] = [];
	}
                
	deleteJoueur(idJoueur) {
		for (let i = 0; i < this.joueurs.length; i++) {
			if (this.joueurs[i].id == idJoueur) {
				for (let j = 0; j < this.espaceStart.length; j++) {
					if (this.espaceStart[j]["x"] == this.joueurs[i].x &&
							this.espaceStart[j]["y"] == this.joueurs[i].y) {
						this.espaceStart[j]["occupe"] = false;
					}
				}
				this.joueurs.splice(i, 1);
				return;
			}
		}
	}
                
	changeKeys(idJoueur, keys) {
		this.listeTouche[idJoueur] = keys["keys"];
		this.listeEspace[idJoueur] = keys["spacePressed"];
	}
                
	compute() {
		this.map.compute();
		
		for (let i = 0; i < this.joueurs.length; i++) {
			if (this.joueurs[i].vie > 0) {
				this.joueurs[i].compute(this.listeTouche[this.joueurs[i].id], this.listeEspace[this.joueurs[i].id]);
			
			
				for (let j = this.joueurs[i].bombs.length - 1; j >= 0; j--) {
					this.joueurs[i].bombs[j].compute();
					
					if (this.joueurs[i].bombs[j].t < 0) {
						this.joueurs[i].bombs.splice(j,1);
					}
				}
			}
		}
	}
                
	static newModele(room) {
		var nbCaseX = 21;
		var nbCaseY = 15;
		nbCaseX += 2;
		nbCaseY += 2;
		var tCaseFinale = 30;
		
		var map = new Carte(nbCaseX, nbCaseY, tCaseFinale);
		
		var modele = new Modele(map, [], room);
		return modele;
	}
                
	toDico() {
		let carte = this.map;
		let dataCarte = {"width":carte.width, "height":carte.height, "cases":[]};
		for (var i = 0; i < carte.width; i++) {
			for (var j = 0; j < carte.height; j++) {
				let c = carte.p[i][j];
				dataCarte["cases"].push({"bombExplosion":c.bombExplosion, "isFranchissable":c.isFranchissable(), 
										 "cassable":c.cassable, "x":c.x, "y":c.y, "size":c.size});
			}
		}
		let dataPlayers = []
				
				for (let i = 0; i < this.joueurs.length; i++) {
			let player = this.joueurs[i];
			
			let datasPlayer = {"vie":player.vie, "seDeplace":player.seDeplace, "direction":player.direction, "id":player.id,
							   "interframe":player.interframe, "interframeMax":player.interframeMax, "frame":player.frame, "frameMax":player.frameMax, 
							   "shield":player.shield, "x":player.x, "y": player.y, "subX":player.subX, "subY": player.subY, "size_case":player.size_case, "size":player.size, "bombs":[]};
			
			for (let j = 0; j < player.bombs.length; j++) {
				let bomb = player.bombs[j];
				datasPlayer["bombs"].push({"t":bomb.t, "m":bomb.m.size, "r":bomb.r, "x":bomb.x, "y":bomb.y, "size":bomb.size})
			}	
			
			dataPlayers.push(datasPlayer);
		}
		return {"carte":dataCarte, "players":dataPlayers};
	}
}
                
module.exports = Modele;
               
