const choices = ['rock', 'paper', 'scissors']

 function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
 }

 function getHumanChoice() {
    return prompt('Rock, paper, or scissors?')
 }

 console.log(getHumanChoice())