const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    var readStream = fs.createReadStream('./url.html'); 

    readStream.on('open', function(){
        res.write('This file is Open');
        res.end()
    });
}).listen(3001)
