<script>
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

    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection == "rock" && computerSelection == "scissors"){
            return "You win! Rock beats Scissors";
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            return "You win! Paper beats Rock";
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            return "You win! Scissors beats Rock";
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            return "You lose! Scissors beats Rock";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            return "You lose! Rock beats Paper";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            return "You lose! Scissors beats Paper";
        } else {
            return "It's a tie!"
        }
    }

    function game(){  
        let playerWins = 0;
        let computerWins = 0;
        for(let i = 0; i < 5; i++){
            let playerSelection = prompt("Enter your choice: ");
            let computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection)
            console.log("--------------------------------------")
            console.log(`You: ${playerSelection.toLowerCase()} vs Computer: ${computerSelection} \n${result}`);
            console.log("--------------------------------------");

            if (result.search("win") > 0){
                playerWins++;
            } else if (result.search("lose") > 0){
                computerWins++;
            }
        }
        console.log(`       RESULTS     `);
        console.log(`You: ${playerWins} --- Computer: ${computerWins}`);
        return;
    }

    game();

  </script>