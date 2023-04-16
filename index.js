let scoreWin = 0;
let scoreLose = 0;
let ties = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;

  let computer;

  if (random === 1) {
    computer = "rock";
  } else if (random === 2) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  return computer;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      ties++;
      return "Draw!";
    } else if (computerSelection == "paper") {
      scoreLose++;
      return "You Lose!";
    } else {
      scoreWin++;
      return "You Win!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      scoreWin++;
      return "You Win! ";
    } else if (computerSelection == "paper") {
      ties++;
      return "Draw!";
    } else {
      scoreLose++;
      return "You Lose!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      scoreLose++;
      return "You lose!";
    } else if (computerSelection == "paper") {
      scoreWin++;
      return "You Win!";
    } else {
      ties++;
      return "Draw!";
    }
  } else if (
    playerSelection === null ||
    playerSelection === undefined ||
    playerSelection === ""
  ) {
    return "No input/canceled";
  } else {
    return "wrong input";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    alert(`${result} You: ${scoreWin} Bot: ${scoreLose} Tie: ${ties}`);
    console.log(`${result} You: ${scoreWin} Bot: ${scoreLose} Tie: ${ties}`);
  }

  if (scoreWin > scoreLose) {
    scoreWin = 0;
    scoreLose = 0;
    ties = 0;
    alert("You Win the Round!");
    console.log("You Win the Round!");
  } else if (scoreWin < scoreLose) {
    scoreWin = 0;
    scoreLose = 0;
    ties = 0;
    alert("You lose the Round!");
    console.log("You lose the Round!");
  } else {
    scoreWin = 0;
    scoreLose = 0;
    ties = 0;
    alert("It's a Tie!");
    console.log("It's a Tie!");
  }
}

game();
