var http=require('http');

function HandleServer(Req,Res) {
    Res.end("<h1>Hello i'm from NodeJS</h1>")
}

var server=http.createServer(HandleServer);
server.listen(3000,function(){
console.log('Server is running...');
})