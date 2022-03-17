const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.unlink("delete.html", function(err){
       if(err){
        return console.log(err);
       }
      
       res.write('File Deleted Successfuly!')
       res.end()    
    })
}).listen(3001)