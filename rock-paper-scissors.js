const prompt = require('prompt-sync')({sigint: true});
let player1 = prompt("What is your name Player 1: ");
let player2 = prompt("And Player 2, who are you: ");
console.log();

player1 = prompt("Choose your weapon: rock, paper, or scissors: ")

if(player1 === "rock"){
    console.log("You picked rock. SMAAASH SCISSORS!!!!");
} else if(player1 === "paper"){
    console.log("You picked paper. COVER THAT ROCK!!!")
} else if(player1 === "scissors"){
        console.log("You picked scissors. SLICE AND DICE PAPER!")
}


player2 = prompt ("And how will you defend yourself: ")

if(player2 === "rock"){
    console.log("You picked rock. SMAAASH SCISSORS!!!!");
} else if(player2 === "paper"){
    console.log("You picked paper. COVER THAT ROCK!!!")
} else if(player2 === "scissors"){
    console.log("You picked scissors. SLICE AND DICE PAPER!")
}

if(player1 === "rock" && player2 === "rock"){
    console.log("draw")
}   else if(player1 === "rock" && player2 === "paper"){
    console.log("Player 2 WINS")
}   else if(player1 === "rock" && player2 === "scissors"){
    console.log("Player 1 LOSES")
}   else if(player2 === "rock" && player1 === "paper"){
   console.log("Player 2 LOSES")
}   else(player1 === "scissors" && player2 === "rock")
    console.log("Player 2 WINS")