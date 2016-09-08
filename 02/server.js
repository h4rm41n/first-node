var http = require('http');
var route = require('./route');

http.createServer(route.HandleRequest).listen(3000,function() {
    console.log('Server is running...');
});