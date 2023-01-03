/* Round play scripts*/


function getComputerChoice() {
  let ComputerChoice = Math.floor(Math.random()* 3)
  switch (ComputerChoice) {
   case 0:
      return "ROCK";
   case 1:
      return "PAPER";
   case 2: 
      return "SCISSORS"; 
  }
}

function getPlayerChoice() {
   let playerChoice = prompt("ROCK, PAPER, SCISSORS?", "ROCK").toUpperCase()
   return playerChoice
}

const playerChoice = getPlayerChoice()
const ComputerChoice = getComputerChoice()


function getRoundWinner(playerChoice, ComputerChoice) {  
      console.log(playerChoice)
      console.log(ComputerChoice)
      if (playerChoice == "ROCK" && ComputerChoice == "ROCK" ||
          playerChoice == "PAPER" && ComputerChoice == "PAPER" ||
          playerChoice == "SCISSORS" && ComputerChoice == "SCISSORS") {
      return "It's a draw!"
      } 
      if (playerChoice == "ROCK" && ComputerChoice == "SCISSORS" ||
               playerChoice == "PAPER" && ComputerChoice == "ROCK" ||
               playerChoice == "SCISSORS" && ComputerChoice == "PAPER") {
      return "You win the round!"
      } 
      if (playerChoice == "ROCK" && ComputerChoice == "PAPER" ||
               playerChoice == "PAPER" && ComputerChoice == "SCISSORS" ||
               playerChoice == "SCISSORS" && ComputerChoice == "ROCK") {
      return "The computer won the round!"
      }
}

function game() {
}

/*UI*/


console.log(getRoundWinner(playerChoice, ComputerChoice))

