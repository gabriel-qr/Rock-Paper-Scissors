const choices = ['rock', 'paper', 'scissors']

 function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
 }

 function getHumanChoice() {
    return prompt('Rock, paper, or scissors?')
 }


let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

/* paper beats rock
rock beats scissors
scissors beats paper */

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
   if (computerChoice === humanChoice){
    console.log('It was a draw!')
    console.log(`The score is: You: ${humanScore} | Computer: ${computerScore}`)
   } else if (
        (humanChoice === 'paper' && computerChoice === 'rocks') ||
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`)
        humanScore ++
        console.log(`The score is: You: ${humanScore} | Computer: ${computerScore}`)
    } else {
        console.log(`You loose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`)
        computerScore ++
        console.log(`The score is: You: ${humanScore} | Computer: ${computerScore}`)
    }
}

playRound(humanSelection, computerSelection)