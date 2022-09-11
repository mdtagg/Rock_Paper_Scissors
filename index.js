function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors']
    let randNum = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[randNum]
}

getComputerChoice()

function playRound(playerSelection) {
    playerSelection.toLowerCase()
    console.log(playerSelection)
    console.log(computerSelection)

    if(playerSelection === 'rock' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'scissors' 
    || playerSelection === 'scissors' && computerSelection === 'rock')
    {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    
    else if(playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'
    || playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    
    else{
        return 'Its a draw! Play again'
        
    }
    
}
let playerSelection = 'rock'
let computerSelection = getComputerChoice()
playRound(playerSelection,computerSelection)