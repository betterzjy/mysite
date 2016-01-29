var express = require("express");
var app = express();


//中间件
app.use(express.compress()); //压缩
app.use(express.cookieParser()); //cookie支持
app.use(express.cookieSession()); //session支持


app.get("/", function (req, res) {
    res.send('hello world!');
});
app.get("/index", function(req, res) {
    //res.json("h");
    res.sendFile("static/index/html");
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('app is listening at http://%s:%s', host, port);
});