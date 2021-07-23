const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.

let num1 = parseFloat(prompt("Please enter the first number: "));

if (isNaN(num1)) {
    console.log(`Not a valid number!`);
    return;
}

let num2 = parseFloat(prompt("Please enter the second number: "));

if (isNaN(num2)) {
    console.log(`Not a valid number!`);
    return;
}

let opr = prompt("Please choose the operation (+, -, /, *): ");

if (opr == "+") {
    console.log(`${num1} ${opr} ${num2} = ${num1 + num2}`);
}else if (opr == '-') {
    console.log(`${num1} ${opr} ${num2} = ${num1 - num2}`);
}else if (opr == '/') {
    console.log(`${num1} ${opr} ${num2} = ${num1 / num2}`);
}else if (opr == '*') {
    console.log(`${num1} ${opr} ${num2} = ${num1 * num2}`);
}else {
    console.log("Not a valid operation!")
}
