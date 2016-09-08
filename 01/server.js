var http=require('http');
var fs=require('fs');

function HandleServer(Req,Res) {
    Res.writeHead(200,{'Content-Type':'text/html'});

    fs.readFile('./index.html',null,function(err,data){
        if(err){
            Res.writeHead(404);
            Res.write('File Not Found');
        }
        else{
            Res.write(data);
        }

        Res.end();
    })
}

var server=http.createServer(HandleServer);
server.listen(3000,function(){
console.log('Server is running...');
})