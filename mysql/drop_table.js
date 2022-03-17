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
    var sql = "DROP TABLE Deportment_Of_SCS";
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log('DROP TABLE Successfuly!');
    });
});