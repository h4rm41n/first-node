var fs = require('fs');
var url = require('url');

function RenderFile(ReqNamaFile, Res){
    Res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(ReqNamaFile,null,function(err, data){
        if(err){
            Res.writeHead(404);
            Res.write("<h2>File Not Found</h2>");
        }
        else{
            Res.write(data);
        }

        Res.end();
    });
}

module.exports = {
    HandleRequest : function(Req,Res){
        Res.writeHead(200,{'Content-Type':'text/html'});
        var path = url.parse(Req.url).pathname;

        switch (path) {
            case '/':
                RenderFile('./templates/index.html',Res);
                break;
            case '/users':
                RenderFile('./templates/users.html',Res);
                break;
            default:
                RenderFile('./templates/index.html',Res);
                break;
        }
    }
}