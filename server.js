// server.js
// where your node app starts
// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get('/chat/:room', function(req, res) {
  res.sendFile(__dirname + '/public/page.html');
});

io.on('connection', function(socket){
    // put the client in the requested room
    socket.on("joinRoom", function(room) {
        // only allow certain characters in room names
        // to prevent messing with socket.io internal rooms
        if (!(/[^\w.]/.test(room))) {
            socket.join(room);
        }
    });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
