var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Modele = require('./server/Modele.js');


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
})

app.get('/room/:room', function(req, res) {
	res.sendFile(__dirname + '/public/page.html');
});

var rooms = {};
var playerRoom = {};

io.on('connection', function(socket) {
	console.log('A user is connected');
	
	// put the client in the requested room
	socket.on("joinRoom", function(info) {
		// only allow certain characters in room names
		// to prevent messing with socket.io internal rooms
		let room = info["room"];
		let name = info["name"];
		if (!(/[^\w.]/.test(room))) {
			if (rooms[room] == undefined || (rooms[room]["joueurs"].length < 4 && rooms[room]["allReady"] == false)) {
				socket.join(room);
				if (rooms[room] == undefined) {
					rooms[room] = {"joueurs":[socket.id], "allReady":false, "modele":Modele.newModele(room)};
					console.log("NbJoueursModele : " + rooms[room]["modele"].joueurs.length + "   tailleCarte : " + rooms[room]["modele"].map.p[0].length);
				} else {
					rooms[room]["joueurs"].push(socket.id);
				}
				rooms[room]["modele"].addJoueur(socket.id, name);
				
				io.to(room).emit("modele",rooms[room]["modele"].toDico());
				console.log("Modele envoye");
				
				playerRoom[socket.id] = {"room":room, "id":socket.id, "ready":false};
				console.log(room + " " + rooms[room]["joueurs"].length);
				console.log(room + " " + playerRoom[socket.id]["id"]);
			}
		}
	});
	
	socket.on("keys", function(keys) {
		rooms[ playerRoom[socket.id]["room"] ]["modele"].changeKeys(socket.id, keys);
	});
	
	socket.on("ready", function() {
		playerRoom[socket.id]["ready"] = true;
		let allReady = true;
		let numRoom = playerRoom[socket.id]["room"];
		for (let i = 0; i < rooms[numRoom]["joueurs"].length; i++) {
			if (playerRoom[ rooms[numRoom]["joueurs"][i] ]["ready"] != true) {
				allReady = false;
			}
		}
		if (allReady) {
			console.log("Start !");
			start(rooms[numRoom]["modele"], io);
		} else {
			console.log("Not everyone is ready");
		}
	});
	
	socket.on("disconnect", function() {
		let room = playerRoom[socket.id]["room"];
		console.log('A user is disconnected from ' + room);
		rooms[ room ]["modele"].deleteJoueur(playerRoom[socket.id]["id"]);
		for (let i = 0; i < rooms[ room ]["joueurs"].length; i++) {
			if (playerRoom[ rooms[ room ]["joueurs"][i]]["id"] == socket.id) {
				rooms[ room ]["joueurs"].splice(i, 1);
			}
		}
		
		io.to(room).emit("modele",rooms[ room ]["modele"].toDico());
		
		console.log(room + " " + rooms[ room ]["joueurs"].length);
		playerRoom[socket.id] = undefined;
	});
	
	socket.on('message', function(data) {
		console.log('Message recu : ' + data["text"] + " from room " + data["room"]);
		io.to(data["room"]).emit('message', data["text"]);
	});
});

var calcule = function(modele, io) {
	modele.compute();
	io.to(modele.room).emit("modele", modele.toDico());
}
		
var start = function(modele, io) {
	var INTERVAL = 30;
	setInterval(calcule, INTERVAL, modele, io);
}
		
http.listen(3001, function() {
	console.log("Server running on 3001");
});
		
