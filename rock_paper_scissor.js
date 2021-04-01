let human = 0;
let computer = 0;
function computerPlay() {
  const hand = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];
}
function play(playerSelection, computerSelection) {
  const playerSelection = playerSelection.toLowerCase();
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
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    let playerSelection = prompt("What do you wanna play?");
    console.log(play(playerSelection, computerSelection));
    console.log("Human:" + human + " vs Computer:" + computer);
  }
}
