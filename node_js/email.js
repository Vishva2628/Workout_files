const nodemailer = require('nodemailer');

var sender = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user : 'vishaecvn2000@gmail.com',
        pass :'EcvN262728'
    }
});

var composemail = {
    form : 'vishvaecvn2000@gmail.com',
    to :"vishvaecv57517@gmail.com",
    subject :"send email using Node js",
    text : "hello this is node js email sending"
};
sender.sendMail(composemail,function(err, info){
    if(err){
        console.log(err);
    }
    else{
        console.log("email send Successfuly" + info.response);
    }
});
