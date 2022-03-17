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
    var sql = "SELECT * FROM Student_Data LIMIT 5, 3"
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log(result);
        console.log('Limit the Data Successfuly!');

    });
});