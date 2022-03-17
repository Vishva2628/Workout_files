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
                      /*want to show one ID In CMD use this */
    var sql = "SELECT * FROM Deportment_Of_SCS WHERE city LIKE 'C%'";
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log(result)
        console.log('Updated Data Successfuly!');
    });
});