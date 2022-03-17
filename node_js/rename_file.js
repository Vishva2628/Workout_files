const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.rename("hello.html",'rename.html', function(err){
       if(err){
        return console.log(err);
       }
      
       res.write('File Name Changed Successfuly!')
       res.end()    
    })
}).listen(3001)