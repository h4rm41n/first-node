
var express = require('express');
var app = express();

app.get('/',function(Req, Res){
    Res.send('<h2>Hello mas bro</h2>')
});

app.listen(3000,function(){
    console.log('Server is running...');
})