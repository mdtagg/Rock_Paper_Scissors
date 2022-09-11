function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors']
    let randNum = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[randNum]
}

getComputerChoice()

function playRound(playerSelection,computerSelection = getComputerChoice()) {
    playerSelection.toLowerCase()
    console.log(playerSelection)
    console.log(computerSelection)

    if(playerSelection === 'rock' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'scissors' 
    || playerSelection === 'scissors' && computerSelection === 'rock')
    {
        console.log( `You lose! ${computerSelection} beats ${playerSelection}`)
    }
    
    else if(playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'
    || playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
    
    else{
        console.log('Its a draw! Play again')
    }
    
}

playRound('rock')