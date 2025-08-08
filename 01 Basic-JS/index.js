
//fundamental of javascript
// arrays and object
//function and return
//async js coding
// forEach map filter find indexof
var arr1 =[1,2,3,4,5,6, "hey", {}, true, false]

var arr = [1,2,3,4];
arr.forEach(function(val) {
    console.log(val + " hello");
})

//map
//ek array ke compare dusra cope array banate hai(dublicate copy of array)
//use-- aapka ek array hai ,  uspe kuch calculation apko per member pe krni hai .. calculation ke baad jo result aaegi wo ek new array mai rkhna hai ,,, aur apko wo new array chaiye .. mtlb map array pe chalta hai for each ke tarah aur har baar ek new element nikal new array mai rkhta hai..

var affanarr = arr.map(function(val){
    return 13;
})
console.log(affanarr);

//filter  
//ek array ke compare dusra array banate hai , lekin isme condition hoti hai ki ya tou usse small ya big array banega something differnt but not the same
var affanarr2 = arr.filter(function(val){
    if(val >= 3) {return true;} // agar condition true hai to wo element naya array mai add hoga
    else return false;
})
console.log(affanarr2);

//find

var arr3 = arr.find(function(val){
    if (val ===2) return val;
})
 
console.log(arr3);

//indexof (uss array ka index mtlb address deta hai)
var arr4 = arr.indexOf(3);
console.log(arr4);

//object {curly braket ke under colon dekar left aur right side kuch bhi likho usko object kehte hai}
//object ko key value pair bolte hai.. double comma mai likhna prta hai value.
//object ke value ko access krne ke liye [nameofkey.obj] or obj['name ofkey']

let obj = {
    name: "taimoor"
    age:8
}
obj.name
//object.freeze(obj);


//function

function abcd(){
    return 12;
}

var ans2 = abcd();

//async js coding----line by line code chale ise kehte hai synchronous 
//jo bhi code aysnc nature ka hota hai wo line by line nahi chalega
//jo bhi code async nature ka ho usse side stack mai bhej dou aur agle code ko chala do jo sync nature ka ho...jab saara sync code khtm ho jaye tab check kri async code compltet hua ya nahi,, agr wo complete hua tou usko main stack mai laa dou
async function abc(){
    var blob = await fetch('https://jsonplaceholder.typicode.com/posts') //fetch async nature ka hota hai
    var ans = await blob.json(); 

    console.log(ans.results); //yeh bhi async nature ka hai kyuki blob.json() bhi ek promise return karta hai
}

abc(); //function ko call karte hai

//await ka matlab hai ki jab tak fetch complete nahi hota tab tak aapko wait krna padega