function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log("Random number:", randomNumber);

  if (randomNumber <= 1) {
    return "rock";
  } else if (randomNumber <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const computerChoice = getComputerChoice();
console.log("Computer chose: ", computerChoice);

function getHumanChoice() {
  let humanChoice = prompt("Choose between rock, paper, or scissors");
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    return "none";
  }
}

const humanChoice = getHumanChoice();
console.log("Player chose:", humanChoice);
