// Express server
const express = require("express");
const app = express();

// Sockets server
const server = require("http").createServer(app);

// Socket server configuration
const io = require("socket.io")(server);

// Deploy public directory
app.use(express.static(__dirname + "/public"));

io.on("connection", () => {
	console.log("Client connected!");
});
server.listen(8080, () => {
	console.log("Server running ...");
});
