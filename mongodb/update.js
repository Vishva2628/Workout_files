var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){

    if(err) throw err;
    var dbase = db.db("Students")
    var query = {City:"TvMalai"};
    var newQuery = {$set: {City: "Coimbature"}}
      dbase.collection("student_boys").updateMany(query, newQuery, function(err, result){
        if(err) throw err;
        console.log(result);
        console.log("Updated Successfuly!");
        db.close();
    });   
});