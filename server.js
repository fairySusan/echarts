var express = require('express');
var fs = require("fs")

var app = express();
 app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/liaoning', function (req, res) {
    fs.readFile('./mapJOSN/liaoning.json',function(err,data){
        if(err){
            return console.error(err);
        }
        res.send(data);
    })
 })
app.get('/chongqing', function (req, res) {
    fs.readFile('./mapJOSN/chongqing.json',function(err,data){
        if(err){
            return console.error(err);
        }
        res.send(data);
    })
 })
 app.get('/china', function (req, res) {
    fs.readFile('./mapJOSN/china.json',function(err,data){
        if(err){
            return console.error(err);
        }
        res.send(data);
    })
 })
var server = app.listen(8081, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
})