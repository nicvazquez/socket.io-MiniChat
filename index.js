// Express server
const express = require("express");
const app = express();

// Sockets server
const server = require("http").createServer(app);

// Socket server configuration
const io = require("socket.io")(server);

// Deploy public directory
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
	socket.emit("welcome-message", {
		msg: "Welcome to the server",
		date: new Date(),
	});

	socket.on("client-message", (data) => console.log(data));
});

server.listen(8080, () => {
	console.log("Server running ...");
});
