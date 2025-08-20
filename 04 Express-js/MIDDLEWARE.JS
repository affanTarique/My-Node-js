//jab bhi server request accept karta hai waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho , to yeh element middleware kehlata hai---

const express = require('express');
const app = express();

app.use(function(req, res,next ){
    console.log('first middleware executed');
    next(); // yeh next function ko call karta hai jo agle middleware ya route handler ko execute karega

});

app.use(function(req, res,next ){
    console.log('ab second middleware executed');
    next(); // yeh next function ko call karta hai jo agle middleware ya route handler ko execute karega

});

app.get("/", function(req,res){
    res.send("Hello from Affan sir website the home page");
});

app.get("/about", function(req,res){
    res.send("Hello from Affan sir website the about page");
});

app.get("/profile", function(req,res){
    res.send("Hello from Affan sir website the profile page");
});


app.listen(3000, () => {
  console.log("Server running on port 4000");
});