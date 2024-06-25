const gameChoices = ["rock", "paper", "scissors"];

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }
  console.log("Player: %s to Computer: %s", humanScore, computerScore);

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    switch (humanChoice) {
      case "rock":
        if (computerChoice === "rock") {
          tieScenario();
        } else if (computerChoice === "paper") {
          lossScenario();
        } else {
          winScenario();
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          winScenario();
        } else if (computerChoice === "paper") {
          tieScenario();
        } else {
          lossScenario();
        }
        break;
      case "scissors":
        if (computerChoice === "rock") {
          lossScenario();
        } else if (computerChoice === "paper") {
          winScenario();
        } else {
          tieScenario();
        }
        break;
      default:
        console.log("Invalid choice");
        break;
    }

    function winScenario() {
      console.log("You win! %s beats %s", humanChoice, computerChoice);
      humanScore++;
    }

    function lossScenario() {
      console.log("You lose! %s beats %s", computerChoice, humanChoice);
      computerScore++;
    }

    function tieScenario() {
      console.log("Tie!");
    }
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log("Computer chose: ", gameChoices[randomNumber]);
  return gameChoices[randomNumber];
}

function getHumanChoice() {
  let humanChoice = prompt("Choose between rock, paper, or scissors");
  humanChoice = humanChoice.toLowerCase();
  console.log("Player chose:", humanChoice);
  return humanChoice;
}

playGame();
