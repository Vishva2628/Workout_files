var mysql = require('mysql');

var con = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "12345",
    database : "collage"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    /* Database Creation */
    var sql = "UPDATE Student_Data SET DOB='21' WHERE DOB='12'";
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log('add column Created');
    });
});