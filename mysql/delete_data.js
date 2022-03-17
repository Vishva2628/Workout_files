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
    var sql = "DELETE  FROM Deportment_Of_SCS WHERE age = '19'";
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log('Deleted Successfuly!');
    });
});