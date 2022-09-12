function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors']
    let randNum = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[randNum]
}

getComputerChoice()

function playRound(playerSelection,computerSelection) {
    
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

// let playerSelection = 'rock'
// let computerSelection = getComputerChoice()
// playRound(playerSelection,computerSelection)


function game() {
    let gameResults = [];
    
    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt().toLowerCase()
        gameResults.push(playRound(playerSelection,computerSelection))
    }
    console.log(gameResults)
    checkGameResults(gameResults)
}

game()

function checkGameResults(results) {
    let wins = 0;
    let loses = 0;
    let draws = 0;

    for(let i = 0; i < results.length;i++) {
        if(results[i].includes('win')) {
            wins++
        }
        else if(results[i].includes('lose')) {
            loses++
        }
        else {
            draws++
        }
    }
    
    if(wins > loses) {
        console.log(`You won! You won ${wins} out of ${wins + loses + draws} times`)
    }
    else if(loses > wins) {
        console.log(`You lost! You lost ${loses} out of ${wins + loses + draws} times`)
    }
    else {
        console.log(`Its a draw! Please play again`)
    }
}

