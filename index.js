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
    computer = "scissor";
  }
  return computer;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

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
  } else if (playerSelection == "scissor") {
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
  } else {
    console.log("canceled/wrong input");
  }
  console.log(`${result}`);
}

function game() {
  let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
  let result = playRound(playerSelection);

  console.log(result);
  console.log(`You: ${scoreWin} Bot: ${scoreLose} Tie: ${ties}`);
}

game();
game();
game();
