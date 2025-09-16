const choices = ['rock', 'paper', 'scissors']

 function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt('Rock, paper, or scissors?')
}

let humanScore = 0
let computerScore = 0

function getWinner(human, computer) {
    if (human === computer) {
        return 'You tied!'
    } else {
       return human > computer ? 'Congratulations, You won!' : 'You lost, try again.'
    }
}

/* paper beats rock
rock beats scissors
scissors beats paper */

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (computerChoice === humanChoice){
        console.log('It was a draw!')
        console.log(`The score is: You: ${humanScore} | Computer: ${computerScore}`)
    } else if (
        (humanChoice === 'paper' && computerChoice === 'rock') ||
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

 function playGame() {
    for (let i=0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
}

playGame();
console.log(getWinner(humanScore, computerScore))