let userSelection = "scissors";

let cheatMode = false;

function cheat(mode) {
  mode = cheatMode;
  cheatMode = !mode;

  console.log(`cheatmode is ${cheatMode ? "Active" : "Inactive"}`);
}

function computerplay() {
  if (cheatMode) {
    if (userSelection === "rock") return "scissors";
    if (userSelection === "paper") return "rock";
    if (userSelection === "scissors") return "paper";
  }
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return "rock";
  } else if (randomNumber > 0.34 && randomNumber < 0.67) {
    return "paper";
  }
  return "scissors";
}

const playRound = function (userSelection) {
  const computerSelection = computerplay();
  return determineWinner(userSelection, computerSelection);
};

const determineWinner = (userSelection, computerSelection) => {
  if (userSelection === computerSelection) {
    return "Its a tie";
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "scissors" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    return "User wins";
  } else {
    return "User loses";
  }
};

console.log(playRound(userSelection));
cheat();
console.log(playRound(userSelection));
cheat();
console.log(playRound(userSelection));
