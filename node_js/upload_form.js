/*const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldPath = files.uploadfile.filepath;
            var newPath = 'C:/Users/Desktop/' + files.uploadfile.name;
            fs.rename(oldPath, newPath, function(err){
                if(err) throw err; 
                res.write('File uploaded') 
                res.end();
               /*  res.write('<h2>Your File Location</h2><br>')
                res.write('<h1>OldPath :'+ oldPath + '</h1><br>')
                res.write('<h1>NewPath :'+ newPath + '</h1><br>') 
                
            })
            res.write('File uploaded');
            res.end();
        });
    }else{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<form action ="fileupload" method = "post" enctype = "multipart/form-data">');
    res.write('<input type="file" name = "uploadfile"><br><br>');
    res.write('<input type = "submit">');
    res.write('</form>')
    res.end();
    }
    
}).listen('3001') */

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'E:/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 }); 
  } else { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3001);