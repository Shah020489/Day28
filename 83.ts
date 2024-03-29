
let stringToChangeFormat:string="Hello World";
function changeLetterToUpperCase(stringToChangeFormat:string):string{
    return stringToChangeFormat.toUpperCase();
}

function changeLetterToBelowCase(stringToChangeFormat:string):string{
    return stringToChangeFormat.toLowerCase();
}

console.log(changeLetterToBelowCase(stringToChangeFormat));
console.log(changeLetterToUpperCase(stringToChangeFormat));
console.log("Actual String: "+stringToChangeFormat);