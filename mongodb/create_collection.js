var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){

    if(err) throw err;
    var dbase = db.db("Students")
      dbase.createCollection("student_boys", function(err, res){
        if(err) throw err;

        console.log("Collection Created Successfuly!");
        db.close();
    });   
});