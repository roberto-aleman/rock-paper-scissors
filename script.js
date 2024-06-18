const gameChoices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === gameChoices[0]) {
    if (computerChoice === gameChoices[1]) {
      console.log("You lose! %s beats %s", computerChoice, humanChoice);
      computerScore++;
    } else if (computerChoice === gameChoices[2]) {
      console.log("You win! %s beats %s", humanChoice, computerChoice);
      humanScore++;
    } else {
      console.log("Tie!");
    }
  } else if (humanChoice === gameChoices[1]) {
    if (computerChoice === gameChoices[2]) {
      console.log("You lose! %s beats %s", computerChoice, humanChoice);
      computerScore++;
    } else if (computerChoice === gameChoices[0]) {
      console.log("You win! %s beats %s", humanChoice, computerChoice);
      humanScore++;
    } else {
      console.log("Tie!");
    }
  } else if (humanChoice === gameChoices[2]) {
    if (computerChoice === gameChoices[0]) {
      console.log("You lose! %s beats %s", computerChoice, humanChoice);
      computerScore++;
    } else if (computerChoice === gameChoices[1]) {
      console.log("You win! %s beats %s", humanChoice, computerChoice);
      humanScore++;
    } else {
      console.log("Tie!");
    }
  } else {
    console.log("You chose an invalid choice.");
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log("Random number:", randomNumber);
  console.log("Computer chose: ", gameChoices[randomNumber]);
  return gameChoices[randomNumber];
}

function getHumanChoice() {
  let humanChoice = prompt("Choose between rock, paper, or scissors");
  humanChoice = humanChoice.toLowerCase();
  if (gameChoices.includes(humanChoice)) {
    console.log("Player chose:", humanChoice);
    return humanChoice;
  } else {
    console.log("Invalid choice");
    return "invalid choice";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
