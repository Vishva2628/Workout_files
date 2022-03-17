const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.stat('index.html', function(err, stat){
       if(err){
        return console.log(err);
       }
       console.log(stat);
       res.write('It is File? : ' + stat.isFile());
       res.write('It is File? : ' + stat.isDirectory());
       res.end()    
    })
}).listen(3001)