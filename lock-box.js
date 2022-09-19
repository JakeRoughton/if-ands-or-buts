const prompt = require('prompt-sync')({sigint: true});

let pinCode = 1337;

let num = Number(prompt("Input passcode to unlock: "));

console.log (num);

if (num === 1337){
    console.log("Well Done!! You may enter")
}
if (num !== 1337){
    console.log("Wrong!!! Try again!!")
}