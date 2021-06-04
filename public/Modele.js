// Representation deu jeu Bomber's
class Modele {
	static drawBombeFromData(bomb, ratio) {
		if (bomb["t"] >= 0) {
			let x = (bomb["x"] * bomb["size"] + bomb["r"]) * ratio;
			let y = (bomb["y"] * bomb["size"] + bomb["r"]) * ratio;
			let r = bomb["r"] * ratio;
			context.beginPath();
			context.arc(x, y, r, 0, 2*Math.PI);
			context.lineWidth = 3;
			//Animation un et deux intervalle(s) avant l'explosion 
			if (bomb["t"] >= 10) {
				let varm = document.getElementById("bomb");
				let x1 = bomb["x"] * bomb["size"] * ratio;
				let y1 = bomb["y"] * bomb["size"] * ratio;
				let size = bomb["size"] * ratio;
				context.drawImage(varm, x1, y1, size, size);
			} else if (bomb["t"] == 0){
				//(new Audio('https://cdn.glitch.com/78539be0-7261-4593-9d5a-b8d0ccd26f37%2FaudioExplosion%20(mp3cut.net).mp3?v=1619046058517')).play();
			}
		}
	}
	
	static drawPlayerFromData(player, ratio) {
		if (player["vie"] > 0) {
			// set fill and stroke styles
			context.lineWidth = 2;
			context.fillStyle = "red";
			context.strokeStyle = "red";
			
			// draw a rectangle with fill and stroke
			//context.fillRect(this.x, this.y, this.size, this.size);
			let varm = document.getElementById(player["direction"] + player["frame"]);
			if (!player["seDeplace"]) {
				varm = document.getElementById(player["direction"] + "1");
			}
			if (player["shield"] % 3 == 0) {
				let x = (player["x"] * player["size_case"] + player["subX"]) * ratio;
				let y = (player["y"] * player["size_case"] + player["subY"]) * ratio;
				let size = player["size"] * ratio;
				context.drawImage(varm, x, y, size, size);
			}
			for (let i = 0; i < player["bombs"].length; i++) {
				Modele.drawBombeFromData(player["bombs"][i], ratio);
			}
		}
	}
	
	static drawCaseFromData(c, ratio) {
		let varm;
		if (c["bombExplosion"] > 0) {
			varm = document.getElementById("explosion");
		}  else {
			if (c["isFranchissable"]) {
				varm = document.getElementById("path");
			} else if (c["cassable"]) {
				varm = document.getElementById("breakable");
			} else {
				varm = document.getElementById("wall");
			}
			context.strokeStyle = "black";
		}
		let x = c["x"] * c["size"] * ratio;
		let y = c["y"] * c["size"] * ratio;
		let size = c["size"] * ratio;
		context.drawImage(varm, x, y, size, size);
	}
	
	static drawCarteFromData(carte, ratio) {
		// Initialisation des variables du crayon
		context.lineWidth = 2;
		context.strokeStyle = "black";
		
		//Dessin des cases une par une
		for (let i = 0; i < carte["cases"].length; i++) {
			Modele.drawCaseFromData(carte["cases"][i], ratio);
		}
	}
	
	static drawModeleFromData(modele, socket) {
		var screenHeight = window.innerHeight * (4/5);
		var screenWidth = window.innerWidth * (4/5);
		
		let servSizeX = modele["carte"].width * modele["carte"]["cases"][0]["size"];
		let servSizeY = modele["carte"].height * modele["carte"]["cases"][0]["size"];
		
		let ratioX = screenWidth / servSizeX;
		let ratioY = screenHeight / servSizeY;
		let ratio = ratioX;
		if (ratioY < ratioX) {
			ratio = ratioY
		}
		
		canvas.width = servSizeX * ratio;
		canvas.height = servSizeY * ratio;
		
		Modele.drawCarteFromData(modele["carte"], ratio);
		
		let enVie = 0;
		let selfEnVie = false;
		for (let i = 0; i < modele["players"].length; i++) {
			console.log("i : "+i+"  Player : " + modele["players"][i]["id"] + "  Vie : " + modele["players"][i]["vie"]);
			if (modele["players"][i]["vie"] > 0) {
				Modele.drawPlayerFromData(modele["players"][i], ratio);
				enVie ++;
				if (socket.id == modele["players"][i]["id"]) {
					selfEnVie = true;
				}
			}
		}
		if (enVie == 1 && selfEnVie && pret && !fin) {
			fin = true;
			document.getElementById('win').style.display = 'block';
			document.getElementById('dark').style.display = 'block';
		} else if (!selfEnVie && pret && !fin) {
			fin = true;
			document.getElementById('loose').style.display = 'block';
			document.getElementById('dark').style.display = 'block';
		}
	}
}
