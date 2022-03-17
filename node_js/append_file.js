const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.appendFile("index.html",'This is ApeendFile content', function(err){
       if(err){
        return console.log(err);
       }
      
       res.write('Success!')
       res.end()    
    })
}).listen(3001)