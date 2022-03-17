/* var http = require('http');
const { url } = require('inspector');
const { parse } = require('path');
//var date = require('./date.js')

http.createServer(function(req, res){
    //res.write('This site Accessed your Request')
  // res.end("Date: " + date.myDateTime());
   var q = url.parse(req.url, true).query;
   var text = q.year + " " + q.month;
   res.end(text);
}).listen(2020); */

const http = require('http');

http.createServer(function(req, res){
    res.write('This page is Running');
    res.end();
}).listen(2022)