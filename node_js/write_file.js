const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.writeFile("index.html","habebe i'm Hacker", function(err){
       if(err){
        return console.log(err);
       }
      
       res.write('Haked!')
       res.end()    
    })
}).listen(3001)