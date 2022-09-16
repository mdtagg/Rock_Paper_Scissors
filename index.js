/* getComputerChoice returns a random value of rock paper or scissors*/

function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors']
    let randNum = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[randNum]
}


/* playRound takes the players choice and the computers choice and uses 
logic to determine if the player won lost or drew against the computer*/

let gameResultsArray = []

function playRound(e) {
    const playerSelection = e.target.value
    let computerSelection = getComputerChoice()
    console.log(playerSelection)
    console.log(computerSelection)
    
    if(playerSelection === 'rock' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'scissors' 
    || playerSelection === 'scissors' && computerSelection === 'rock')
    {
        loses++
        let lose = document.querySelector('.computer')
        lose.textContent = `${loses}`
        // return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    
    else if(playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'
    || playerSelection === 'rock' && computerSelection === 'scissors') 
    {
        wins++
        let win = document.querySelector('.player')
        win.textContent = `${wins}`

        // return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        draws++
        let draw = document.querySelector('.draw')
        draw.textContent = `${draws}`
        // return 'Its a draw! Play again'
    }
}

/* The game function is the parent function of all other function declared
It runs the playRound function 5 times and logs the results in an array*/

// function game() {
//     let gameResults = [];
    
  
    
// }

// game()

/* The checkGameResults is a helper function in the game function.
It loops through the game results to check for wins loses or draws.
It then uses logic on the amount of wins loses or draws to determine 
if the player beat the computer, lost to the computer or drew*/ 

function checkGameResults(wins,loses,draws) {
    
    console.log(wins)

    // for(let i = 0; i < results.length;i++) {
    //     if(results[i].includes('win')) {
    //         wins++
    //     }
    //     else if(results[i].includes('lose')) {
    //         loses++
    //     }
    //     else {
    //         draws++
    //     }
    // }
    
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
// console.log(buttons)
buttons.forEach(button => button.addEventListener('click', playRound))
let wins = 0
let loses = 0
let draws = 0
let totalGames = wins + loses + draws

