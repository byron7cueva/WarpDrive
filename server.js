var http = require('http');
var path = require('path');
var express = require('express');

//Routers
var warpRouter = require('./app/routers/warpRouter');

var server = express();

server.use(express.static(path.join(__dirname, 'app/public')));

//Agregando rutas, Middlewares
server.use('/api', warpRouter);

http.createServer(server).listen(9000);