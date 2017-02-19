var express = require("express");
var mongoose = require("mongoose");
// var bodyParser = require("body-parser");
var app = express();
var a = (process.env.PORT || 3000)
//app.use(bodyParser.json())




var studentscehema = new mongoose.Schema({
    name: String,
    age: Number
})
var studentModel = mongoose.model("student",studentscehema);

app.get("/e", function(req,res,next){
     studentModel.find({},function(err,data){
         if(!err){
             res.send("data is "+data)
         }
         else{
             res.send(err)
         }
     })
  })




app.post("/express", function (req, res, next) {
   var newstudent = new studentModel({
       name: "mubashir",
       age: 21
   })
newstudent.save(function(err,data){
 if (!err){
     res.send("your data is send")
 }
 else{
     res.send("error")
 }
})
})

app.listen(a, function () {

    console.log("your app is runnningon" + a + "port");


})
mongoose.connect('mongodb://mubashir:123@ds157499.mlab.com:57499/practicemongoose')
mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected");
 });