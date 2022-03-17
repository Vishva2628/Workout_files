const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.readFile("index.html", function(err, data){
       if(err){
        return console.log(err);
       }
      
       res.write(data)
       res.end()    
    })
}).listen(3001)