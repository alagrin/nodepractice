var fs = require('fs');
//grab file and its contents- stored as object 

var textObject = fs.readFileSync(process.argv[2]);
//looking at the contents of the object- string

//turn string into array of characters
var stringArray = textObject.toString().split('');

//take array and loop through contents
var count = 0; // declare in scope for loop to access

//iterate through check if character is newline;
for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === '\n') {
        count += 1;
    } 
}
console.log(count);

//test file is contents submitted in process object containing an argument with text
