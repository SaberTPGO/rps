const playerOptions = ['Rock',"Paper",'Scissors'];
const computerOptions = ['Rock',"Paper",'Scissors'];

function playRound(playerSelection, computerSelection) {

function playerPlay() {
    const playerPick = Math.floor(Math.random()*3);
    const playerSelection = playerOptions[playerPick];
    console.log(playerSelection)

function computerPlay() {
    const computerPick = Math.floor(Math.random()*3);
    const computerSelection = computerOptions[computerPick];
    console.log(computerSelection)
}

computerPlay();
playerPlay();


//function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        displayResults("Tie game!");
      } else if 
        (computerSelection == "rock" && playerSelection == "scissors"){
        console.log("You lose."); 
      }
        else if 
        (computerSelection == "scissors" && playerSelection == "paper"){
            console.log("You win!");
      } 
        else if 
        (computerSelection == "paper" && playerSelection == "rock"){
            console.log("You lose.");
        }
};

playRound();

// console.log(playRound(playerSelection, computerSelection));

