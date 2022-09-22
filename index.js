
function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors']
    let randNum = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[randNum]
}

function playRound(e) {
    const playerSelection = e.target.value
    let computerSelection = getComputerChoice()
    console.log(playerSelection)
    console.log(computerSelection)
    
    if(playerSelection === 'rock' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'scissors' 
    || playerSelection === 'scissors' && computerSelection === 'rock')
    {
        totalGames++
        loses++
        let lose = document.querySelector('.computer')
        lose.textContent = `${loses}`
    }
    
    else if(playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'
    || playerSelection === 'rock' && computerSelection === 'scissors') 
    {
        totalGames++
        wins++
        let win = document.querySelector('.player')
        win.textContent = `${wins}`
    }
    else{
        totalGames++
        draws++
        let draw = document.querySelector('.draw')
        draw.textContent = `${draws}`
    }

    if(totalGames === 5) {
        checkGameResults(`${wins}`, `${loses}`,`${draws}`)
    }

    }

function checkGameResults(wins,loses,draws) {
    
    if(wins > loses) {
        const winner = document.querySelector('.outcome')
        winner.textContent = `You won! You won ${wins} times, 
        you lost ${loses} times and you drew ${draws} times out 
        of ${totalGames} games`
    }
    else if(loses > wins) {
        const loser = document.querySelector('.outcome')
        loser.textContent = `You lost! You lost ${loses} times, you won
        ${wins} times and you drew ${draws} times out of ${totalGames} games`
    }
    else {
        const drew = document.querySelector('.outcome')
        drew.textContent = `Its a draw! Please play again`
    }
}

const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach(button => button.addEventListener('click', playRound))
let wins = 0
let loses = 0
let draws = 0
let totalGames = 0

const restart = document.querySelector('.restart-button')

restart.addEventListener('click', () => {
    wins = 0
    loses = 0
    draws = 0
    totalGames = 0
})


