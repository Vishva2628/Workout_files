var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){

    if(err) throw err;
    var dbase = db.db("Students")
    var removeOne = {Name:"pattu"}
      dbase.collection("student_boys").deleteOne(removeOne, function(err, result){
        if(err) throw err;
        
        console.log("One Document Deleted Successfuly!");
        db.close();
    });  
});