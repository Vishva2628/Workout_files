var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){

    if(err) throw err;
    var dbase = db.db("Students")
    var query = {City:"TvMalai"}
      dbase.collection("student_boys").find(query).toArray (function(err, result){
        if(err) throw err;
        console.log(result);
        console.log("Data Finded Successfuly!");
        db.close();
    });   
});