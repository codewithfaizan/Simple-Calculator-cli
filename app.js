import clc from 'cli-color'
import readlineSync from "readline-sync"

console.clear();
let result;
function calci(){
    let color = clc.xterm(160)
    var warn = clc.yellow;


console.log(clc.redBright.bgYellowBright(`---Simple calculator---`));

let a = readlineSync.questionInt(warn("Enter the number1 : "));
let b = readlineSync.questionInt(warn("Enter the number2 : "));

console.log(clc.greenBright(`Select from below operations\n + for Addition, - for Subtraction, * for Multipication , / for division, )`));

let operation = readlineSync.question(clc.red("Operation :"))
// operation = operation.toString()
let array = ["+","-","*","/"]
for(let i=0;i<array.length;i++){
    if(operation == array[i]){
switch (operation){
    case "+":
    result = a+b;
    break;
    case "-":
        result=a-b;
        break;
    case "*":
        result=a*b;
        break;
        case "/":
            result= a/b;          
    }
    console.log(color("Output:",result));
    }
} 
let more = readlineSync.question(`Do you want to continue(Y/n):`)
        if(more == 'Y'){
            console.clear()
        console.log(calci())
        } else (console.clear())
} calci ()

     
        //  else if (more == 'n'){ console.clear()}

