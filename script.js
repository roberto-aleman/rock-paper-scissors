const gameChoices = ["rock", "paper", "scissors"];

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

getComputerChoice();
getHumanChoice();
