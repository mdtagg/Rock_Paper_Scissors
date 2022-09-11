function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors']
    let randNum = Math.floor(Math.random() * rockPaperScissors.length)
    console.log(rockPaperScissors[randNum])
    return rockPaperScissors[randNum]
}

getComputerChoice()