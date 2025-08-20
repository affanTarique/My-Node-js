//router kya hai??--------kisi website pe www.google.com/profile -------------- slash ke baad jo likha hota hai wo router hota hai-------
//router ek tarah ka path hota hai jo ki aapki website ke andar kisi specific page ya resource ko point karta hai

const express = require('express');

const app = express();

//app.get(route,requestHandler); //route="/"  , requestHandler= function

app.get("/", function (req, res) {

    res.send("hello from taimoor")
})

app.get("/profile", function (req, res) {
    res.send("hello world from affan sir")
})

app.listen(3000);

