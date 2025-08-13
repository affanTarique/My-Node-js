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


fs.appendFile('taimoor.txt', " Haanji , abhi aaya hu ", function(err){
    if(err) console.error(err);
    else console.log("file updated successfully")
})

fs.rename('taimoor.txt', "kabbu.txt", function(err){
    if(err)console.error(err);
    else console.log("file renamed successfully") 
})

fs.copyFile('kabbu.txt', 'kabbu2.txt', function(err){
    if(err) console.error(err);
    else console.log("file copied successfully")
})

fs.copyFile('kabbu.txt', "./copy2/kabbu3.txt", function(err){
    if(err) console.error(err);
    else console.log("file copied successfully to subfolder");
})

fs.writeFile('dua.txt', "dua whatt u doing", function(err){
    if (err) console.error(err);
    else console.log("file created successfully")
})

fs.unlink('dua.txt', function(err){
    if(err) console.error(err);
    else console.log("file deleted successfully")
})