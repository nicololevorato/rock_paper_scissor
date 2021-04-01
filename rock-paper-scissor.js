let human = 0;
let computer = 0;
function computerPlay() {
  const hand = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];
}
function play(playerChoice, computerSelection) {
  let playerSelection = playerChoice.toLowerCase();
  if (playerSelection === computerSelection)
    return "Draw! Both choose " + playerSelection;
  if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "scissor") ||
    (playerSelection === "scissor" && computerSelection == "rock")
  ) {
    computer++;
    return "Lost!" + computerSelection + " beats " + playerSelection;
  } else {
    human++;
    return "Win!" + playerSelection + " beats " + computerSelection;
  }
}

function game() {
  console.log("The game has started!");
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerChoice = prompt("What do you wanna play?");
    console.log(play(playerChoice, computerSelection));
    console.log("Human:" + human + " vs Computer:" + computer);
  }
}
