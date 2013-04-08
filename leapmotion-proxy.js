// http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
"use strict";
 
// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'LeapRouter';

// Port where we'll run the websocket server
var webSocketsServerPort = 8889;
 
// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');
var WebSocketClient = require('websocket').client;
 
/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
    // Not important for us. We're writing WebSocket server, not HTTP server
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});
 

 
var wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    
    var client = new WebSocketClient();

    
    var needCloseLeapConnection = false;
    
    var wsConnection = request.accept(null, request.origin);
    
    wsConnection.on('close', function(connection) {
        needCloseLeapConnection = true;
    });
    
    
    client.on('connect', function(connection) {
        console.log('WebSocket client to LeapServer connected');
        connection.on('error', function(error) {
            console.log("Connection on LeapServer Error: " + error.toString());
        });
        connection.on('close', function() {
            console.log('echo-protocol Connection Closed');
        });
        connection.on('message', function(message) {
            if(needCloseLeapConnection === true) {
                connection.close();
            } else {
                if (message.type === 'utf8') {
                    wsConnection.sendUTF(message.utf8Data);
                    //console.log("Received: '" + message.utf8Data + "'");
                }
            }
        });
        
        connection.sendUTF("{\"enableGestures\": true}");
    });
    
    client.connect('ws://localhost:6437/');
    
});