//internet pe kuch bhi krne ke liye kuch rules banaye gye hai ,, unke dawara jinhone internet banaya hai,
//ab unn rules ko follow krna bhut jruri hai,,, aur yeh rules follow ho issiliye yeh rules aapke operating system ke software mein pre installed aate hai

//HTTP Protocol
//yahi protocol hai ya rule hai jisko follow kre bina aap internet pe naa hi kuch bhej skte ho , naa hi kuch manga skte ho

const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("Hello, this is my first server response!");
})

server.listen(3000);
