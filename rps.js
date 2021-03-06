const btnRPS = document.querySelectorAll('div.choices button');
const result = document.querySelector('#result')
const playerScore = document.querySelector('#player-score-p');
const compScore = document.querySelector('#comp-score-p');
const resetBtn = document.querySelector('#reset-button');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

//console.log(btnRPS);



let playerPoints = 0;
let computerPoints = 0;
let round = 0;

function computerPlay(){
    let min = Math.ceil(1);
    let max = Math.ceil(3);
    let randInt = Math.floor(Math.random() * (max - min + 1) + min);

    if (randInt == 1){
        return "rock";
    } else if (randInt == 2){
        return "paper";
    } else {
        return "scissors";
    }
}

startGame();

function playRound(playerSelection, computerSelection){
    round++;
    console.log("------------------------------------------------------------");
    console.log(`Round ${round}`);

    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats Scissors");
        playerPoints++;
        playerScore.textContent = playerPoints;
        result.textContent = `You Win Round: ${round}!`;


    } else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock");
        playerPoints++;
        playerScore.textContent = playerPoints;
        result.textContent = `YOU Win Round: ${round}!`;

    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissors beats Rock");
        playerPoints++;
        playerScore.textContent = playerPoints;
        result.textContent = `YOU Win Round: ${round}!`;

    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose! Scissors beats Rock");
        computerPoints++;
        compScore.textContent = computerPoints;
        result.textContent = `COMP Win Round: ${round}!`;

    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Rock beats Paper");
        computerPoints++;
        compScore.textContent = computerPoints;
        result.textContent = `COMP Win Round: ${round}!`;

    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerPoints++;
        compScore.textContent = computerPoints;
        result.textContent = `COMP Win Round: ${round}!`;

    } else {
        console.log("It's a tie!");
        result.textContent = `TIE! Round: ${round}!`;
    }

    console.log(`Player: ${playerSelection} vs Computer: ${computerSelection}\nPlayer: ${playerPoints}       Computer: ${computerPoints}`);
    console.log("------------------------------------------------------------");
    
    checkForWinner();
}

resetGame();


function checkForWinner(){
    if(playerPoints == 5 && computerPoints == 5){
        console.log("Game is a Tie");
        btnRPS.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        });
        result.textContent = 'GAME IS A TIE!';
    } else if (playerPoints == 5){
        console.log("Player Wins!");
        btnRPS.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        });
        result.textContent = "YOU WIN!"
    }else if (computerPoints == 5){
        console.log("Computer Wins!");
        btnRPS.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        });
        result.textContent = "COMP WIN!"
    }
}

function resetGame(){
    resetBtn.addEventListener('click', () => 
    location.reload());
}

function startGame() {
    btnRPS.forEach(button => {
        button.addEventListener('click', getPlayerChoice);
    });
}

function getPlayerChoice(e){
    playerSelection = (this.id);
    //console.log(playerSelection);
    playRound(playerSelection, computerPlay());
}











