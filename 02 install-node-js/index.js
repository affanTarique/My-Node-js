//node js basics
//intro to node js
//instak=lling nodejs and npm
//file system operation
//understanidng http module

const fs = require('fs');

/*writeFile
appendfile
copyfile
rename
unlink*/

fs.writeFile('taimoor.txt', "heloo taimoor school gye the kya", function(err){
    if (err) console.error(err);
    else console.log("file created successfully")
})

