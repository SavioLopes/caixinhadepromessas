#!/bin/env node

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node.JS!');
}).listen(process.env.OPENSHIFT_NODEJS_PORT);