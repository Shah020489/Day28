let checkingReplaceWordInLine="I love to work in javascript and javascript is too easy for learning";
let newWord="TypeScript";
let replaceWord="javascript";

function replaceWordInSentence(sentence:string,word:string,newWord:string){
    sentence=sentence.replace('javascript','TypeScript');
    console.log(sentence);
}

replaceWordInSentence(checkingReplaceWordInLine,replaceWord,newWord);