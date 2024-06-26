// Game logic
const gameChoices = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

let humanChoice;

function playRound() {
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

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return gameChoices[randomNumber];
}

// UI
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleClick(button.id);
  });
});

function handleClick(choice) {
  if (humanScore < 5 && computerScore < 5) {
    humanChoice = choice;
    playRound();
    updateResults();
  }
}

function updateResults() {
  const div = document.querySelector("div");

  let results = div.querySelector(".results");
  if (!results) {
    results = document.createElement("div");
    results.classList.add("results");
    div.appendChild(results);
  }

  let text = results.querySelector("p");
  if (!text) {
    text = document.createElement("p");
    results.appendChild(text);
  }

  text.textContent = `Player: ${humanScore} to Computer: ${computerScore}`;

  if (humanScore === 5) {
    text.append(document.createElement("br"));
    text.append("Player is the winner");
  } else if (computerScore === 5) {
    text.append(document.createElement("br"));
    text.append("Computer is the winner");
  }
}
