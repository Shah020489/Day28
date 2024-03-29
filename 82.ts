// import inquirer from "inquirer";

// const answer = await inquirer .prompt([
//     {
//         type:"string",
//         name:"singleWord",
//         message:"Enter a single word",
//     }
// ]);

// console.log(answer);
let singleWord:string = "hello";

function returnLength(singleWord:string):number{
    return singleWord.length;
}

console.log(returnLength(singleWord));