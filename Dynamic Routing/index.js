const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: ture})); //yeh two lines form ko ham use kar ske uske liye likhe hai//

app.get("/", function(req, res) { //route setup krre hai//
    res.send("chal raha hai chaalu hai");

});

app.listen(3000,function() {
    console.log("server is running on port 3000");
})