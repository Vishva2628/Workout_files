var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){

    if(err) throw err;
    var dbase = db.db("Students")
    var values = [
        {ID: "1", Name: "vishva", Age: "22", City: "Chennai"},
        {ID: "2", Name: "karthick", Age: "21", City: "TvMalai"},
        {ID: "3", Name: "emath", Age: "23", City: "Manalurpet"},
        {ID: "4", Name: "pugazh", Age: "22", City: "Chennai"},
        {ID: "5", Name: "siva", Age: "21", City: "TvMalai"},
        {ID: "6", Name: "sujith", Age: "14", City: "Chennai"},
        {ID: "7", Name: "prithive", Age: "13", City: "Chennai"},
        {ID: "8", Name: "natha", Age: "22", City: "Theni"},
        {ID: "9", Name: "kumar", Age: "19", City: "Madurai"},
        {ID: "10", Name: "pattu", Age: "20", City: "TvMalai"}
    ];
      dbase.collection("student_boys").insertMany (values, function(err, res){ //USE inser Only also as same value
        if(err) throw err;

        console.log("Inserted Data Successfuly!");
        db.close();
    });   
});