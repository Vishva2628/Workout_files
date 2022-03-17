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
    var sql = "CREATE TABLE Student_Data(id INT(30), name VARCHAR(30), age INT(20), city VARCHAR(30))"; //Create Table
    con.query(sql, function(err,result){    
        if(err) throw err;
        console.log('TABLE Created');
    });
});