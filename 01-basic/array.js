
//style 1 (old style)
let namesArr = ["rishal","singh","dahiya"];

console.log(namesArr);

//style 2 (new style)
var names = new Array("rishal","singh","dahiya");

console.log("names ", names);

console.log("lengh", names.length);

//removing last index
names.pop();

console.log(names);

//insering at 0th index
names.unshift("ritu");

console.log(names);

//deleting element from 0th index
names.shift();

console.log(names);



//////////////////////////////print pattern////////////////////////////////////////////

let row = 5;
let patternInitialSize = 1;
let space = 4;

for (let i = 1; i<=row;  i++) {
    
    for(let s =i; s<=row; s++){
        process.stdout.write(" ");
    }
    for (let j = 1; j <=i; j++) {
       
        process.stdout.write("* ");
   
    }
    console.log("");
    
}


///////////////optimized code/////////



for (let i = 1; i <= row; i++) {
    // Print leading spaces
    process.stdout.write(" ".repeat(row - i));

    // Print stars with spaces
    console.log("* ".repeat(i).trim());  
}