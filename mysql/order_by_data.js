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
    var sql = "SELECT* Student_Data ORDER BY name"
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log(result)
        console.log('CREATE ORDER BY NAME!');
    });
});