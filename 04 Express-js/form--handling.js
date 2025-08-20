//session --  
//cookie

const express= require('express');

const app = express();

app.use(express.json()); // to parse JSON bodies
app.use(express.urlencoded({ extended: true})); // to parse URL-encoded bodies

app.get("/", function(req,res){
    res.send("hello learning form handling for my website");

});

app.get("/about", function(req,res){
    res.send("hello learning form handling for my website and this is about page of the wnesite");
    
});

app.get("/profile", function(req,res){
    return next(new Errot("Profile not found")); // example of error handling
    
});

app.listen(3000);