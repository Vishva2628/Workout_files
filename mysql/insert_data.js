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
    var sql = "INSERT INTO Student_Data (id , name , age , city) VALUES ?";
    var values = [
        ['1', 'vishva', '26', 'Chennai'],
        ['2', 'emath', '24', 'TvMalai'],
        ['3', 'pugazh', '11', 'Chennai'],
        ['4', 'karthik', '19', 'TvMalai'],
        ['5', 'Nantha', '20', 'Madurai'],
        ['6', 'kumar', '25', 'Tiruchi'],
        ['7', 'siva', '28', 'theni'],
        ['8', 'sujith', '14', 'Ambatture'],
        ['9', 'prithive', '13', 'TvMalai'],
        ['10', 'kalish', '23', 'Chennai'],
    ];
    con.query(sql, [values], function(err,result){
        if(err) throw err;
        console.log(result);
        console.log('Insert Data Successfuly!');
    });
});