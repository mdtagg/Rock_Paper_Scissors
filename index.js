/* getComputerChoice returns a random value of rock paper or scissors*/

function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors']
    let randNum = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[randNum]
}

/* playRound takes the players choice and the computers choice and uses 
logic to determine if the player won lost or drew against the computer*/

function playRound(e,computerSelection) {
    const playerSelection = e.target.value
    console.log(playerSelection)
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

/* The game function is the parent function of all other function declared
It runs the playRound function 5 times and logs the results in an array*/

// function game() {
//     let gameResults = [];
    
//     for(let i = 0; i < 1; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt().toLowerCase()
//         gameResults.push(playRound(playerSelection,computerSelection))
//     }
//     console.log(gameResults)
//     checkGameResults(gameResults)
// }

// game()

/* The checkGameResults is a helper function in the game function.
It loops through the game results to check for wins loses or draws.
It then uses logic on the amount of wins loses or draws to determine 
if the player beat the computer, lost to the computer or drew*/ 

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

const buttons = Array.from(document.querySelectorAll('button'))
console.log(buttons)
buttons.forEach(button => button.addEventListener('click', playRound))

