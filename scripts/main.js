
// generate random selection between rock, paper and scissor
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// play one round of the game and return c for computer and p for player and t for tie
function playRound(playerSelection, computerSelection) {
    // compare the selection and decide winner
    // check for computer side only
    // check every possible commination
    let winner = undefined;

    switch (computerSelection) {
        case 'rock':
            switch (playerSelection) {
                case 'rock':
                    winner = 't'
                    break;
                case 'paper':
                    winner = 'p'
                    break;
                case 'scissors':
                    winner = 'c'
                    break;
            }
            break;

        case 'paper':
            switch (playerSelection) {
                case 'rock':
                    winner = 'c'
                    break;
                case 'paper':
                    winner = 't'
                    break;
                case 'scissors':
                    winner = 'p'
                    break;
            }
            break;

        case 'scissors':
            switch (playerSelection) {
                case 'rock':
                    winner = 'p'
                    break;
                case 'paper':
                    winner = 'c'
                    break;
                case 'scissors':
                    winner = 't'
                    break;
            }
            break;
    }
    return winner;

}

// get and validate player entry
function getPlayerChoice() {

    const CHOICES = ['rock', 'paper', 'scissors']
    let playerChoice = null;

    // get player choice in lower case
    do {
        playerChoice = prompt('Choice: ').toLowerCase();

    } while (!CHOICES.includes(playerChoice))
    return playerChoice;
}

// game: get computer choices and asks the player for a choice and play 5 times
function game() {

    // scores
    let playerScore = 0;
    let  computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // get choices
        const playerChoice = getPlayerChoice();
        const computerChoice = computerPlay()
        const result = playRound(playerChoice, computerChoice);
        console.log(`you choose: ${playerChoice}`)
        console.log(`and the computer choose ${computerChoice}`)

        // print result
        if (result === 'c') {
            computerScore++;
            console.log('Round Winner: Computer');
        } else if (result === 'p') {
            console.log('Round Winner: Player');
            playerScore++;
        } else {
            console.log('It\'s a tie');
        }
    }

    // final result
    console.log(`final result: `);
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}

game()
