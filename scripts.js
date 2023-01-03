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
   let playerChoice = "ROCK"
   return playerChoice
}

function getRoundWinner() {  
      let ComputerChoice = getComputerChoice()
      let playerChoice = getPlayerChoice() 
      if (playerChoice == "ROCK" && ComputerChoice == "ROCK" ||
          playerChoice == "PAPER" && ComputerChoice == "PAPER" ||
          playerChoice == "SCISSORS" && ComputerChoice == "SCISSORS") {
      return "It's a draw!"
      } else if (playerChoice == "ROCK" && ComputerChoice == "SCISSORS" ||
               playerChoice == "PAPER" && ComputerChoice == "ROCK" ||
               playerChoice == "SCISSORS" && ComputerChoice == "PAPER") {
      return "You win the round!"
      } else if (playerChoice == "ROCK" && ComputerChoice == "PAPER" ||
               playerChoice == "PAPER" && ComputerChoice == "SCISSORS" ||
               playerChoice == "SCISSORS" && ComputerChoice == "ROCK") {
      return "The computer won the round!"
      }
}

function game() {
}

/*UI*/

console.log(getComputerChoice())
console.log(getPlayerChoice())
console.log(getRoundWinner())

