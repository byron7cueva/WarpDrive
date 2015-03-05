var http = require('http');
var path = require('path');
var express = require('express');

//Routers
var wrapRouter = require('./app/routers/wrapRouter');

var server = express();

server.use(express.static(path.join(__dirname, 'app/public')));

//Agregando rutas, Middlewares
server.use('/api', wrapRouter);

http.createServer(server).listen(9000);