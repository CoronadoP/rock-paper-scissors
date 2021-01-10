const btnRPS = document.querySelectorAll('div.choices button');

const playerScore = document.querySelector('#player-score-p');
const compScore = document.querySelector('#comp-score-p');
const resetBtn = document.querySelector('#reset-button');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

//console.log(btnRPS);



let playerPoints = 0;
let computerPoints = 0;

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

    console.log("------------------------------------------------------------");

    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats Scissors");
        playerPoints++;
        playerScore.textContent = playerPoints;

    } else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock");
        playerPoints++;
        playerScore.textContent = playerPoints;

    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissors beats Rock");
        playerPoints++;
        playerScore.textContent = playerPoints;

    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose! Scissors beats Rock");
        computerPoints++;
        compScore.textContent = computerPoints;

    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Rock beats Paper");
        computerPoints++;
        compScore.textContent = computerPoints;

    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerPoints++;
        compScore.textContent = computerPoints;

    } else {
        console.log("It's a tie!");
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
    } else if (playerPoints == 5){
        console.log("Player Wins!");
        btnRPS.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        });
    }else if (computerPoints == 5){
        console.log("Computer Wins!");
        btnRPS.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        });
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











