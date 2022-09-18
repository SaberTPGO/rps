const playerSelection = "Rock";
const computerChoice = ['Rock',"Paper",'Scissors'];

function computerSelection() {
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return;
}

let computerPlay = computerSelection()

console.log(computerPlay);

function playRound(playerSelection, computerSelection) {

if playerSelection == "rock" && computerSelection == "paper" (
    console.log("You lose")

else (
    if playerSelection == "rock" && computerSelection == "scissors" (
        console.log("Congrats, you win!")
    )
)

else (
    if playerSelection == "rock" && computerSelection == "rock" (
        console.log("Its a tie!")
    )
)
)


}; 

// console.log(playRound(playerSelection, computerSelection));

