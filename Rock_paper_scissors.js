// let userSelection = "scissors";

function computerplay(userChoice) {
  // computer checks what user has input when cheatmode is on and returns the opposite to make the user win
  if (cheatMode) {
    if (userChoice === "rock") return "scissors";
    if (userChoice === "paper") return "rock";
    if (userChoice === "scissors") return "paper";
  }
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return "rock";
  } else if (randomNumber > 0.34 && randomNumber < 0.67) {
    return "paper";
  }
  return "scissors";
}

const play = function (userChoice) {
  const computerChoice = computerplay();
  return Winner(userChoice, computerChoice);
};

const Winner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Its a tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "User wins";
  } else {
    return "User loses";
  }
};

let cheatMode = false;

function cheat(mode) {
  mode = cheatMode;
  cheatMode = !mode;

  console.log(`cheatmode is ${cheatMode ? "Active" : "Inactive"}`);
}

// console.log(play);
// cheat();
// console.log(play(userChoice));
// cheat();
// console.log(play(userChoice));
