let stringToChangeFormat = "Hello World";
function changeLetterToUpperCase(stringToChangeFormat) {
    return stringToChangeFormat.toUpperCase();
}
function changeLetterToBelowCase(stringToChangeFormat) {
    return stringToChangeFormat.toLowerCase();
}
console.log(changeLetterToBelowCase(stringToChangeFormat));
console.log(changeLetterToUpperCase(stringToChangeFormat));
console.log("Actual String: " + stringToChangeFormat);
export {};
