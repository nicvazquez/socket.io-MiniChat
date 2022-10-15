// Express server
const app = require("express")();

// Sockets server
const server = require("http").createServer(app);

// Socket server configuration
const io = require("socket.io")(server);

io.on("connection", () => {
	/* … */
});
server.listen(8080, () => {
	console.log("Server running ...");
});
