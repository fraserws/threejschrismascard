const { WSASERVICE_NOT_FOUND } = require('constants');
var express = require('express');
var app = express();

var port = process.env.Port || 8080

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.render("index");
})

app.listen(port, function(){
    console.log("app running ... ");
})