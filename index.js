#!/usr/bin/env node

const app = require('./app');
const debug = require('debug')('Ocold-web:server');
const http = require('http');
const config = require('./config');

let port = normalizePort(process.env.PORT || config.this.port);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if (port >=0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port' + port;

    switch (error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
        const address = server.address();
        const bind = typeof address === 'string'
            ? 'pipe ' + address
            : 'pipe ' + address.port;
        debug('Listening on ' + port);

}