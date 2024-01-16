const http = require('http');
const io = require('socket.io');
require('dotenv').config()

const apiServer = require('./api');
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer);

const sockets = require('./sockets');

const PORT =process.env.PORT || 4001;
httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);

sockets.listen(socketServer);
