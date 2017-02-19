var express = require("express");
// var mongoose = require("mongoose");
// var bodyParser = require("body-parser");
var app = express();
var a = (process.env.PORT || 3000)
//app.use(bodyParser.json())

app.get("/",function(req,res,next){
   res.send("helloworld")
})
app.get("/express",function(req,res,next){
   res.send("helloexpress")
})

app.listen(a,function(){
    
        console.log("your app is runnningon"+a+"port");
        
    
})