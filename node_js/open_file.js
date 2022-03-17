const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.open('openNew.html', 'w+' , function(err, fd){
        if(err){
            console.log(err);
        }
        res.write('Open File Successfuly!')
        res.end()
    })
}).listen(3001)