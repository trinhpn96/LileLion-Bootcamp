//Var declaration
let restart = document.querySelector(".restart-button");
let score = document.querySelector(".score");
let choices = document.querySelectorAll(".choices"); //-> array
let modal = document.querySelector(".modal");
let result = document.querySelector(".modal-content");
let scoreBoard = {
  player: 0,
  computer: 0,
};

//add Event
choices.forEach(function (item) {
  item.addEventListener("click", play);
});

//create playGame function:
function play(event) {
  let playerChoice = event.target.id;
  let computerChoice = getComputerChoice();
  let winner = getWinner(playerChoice, computerChoice);

  console.log(playerChoice, computerChoice, winner);

  showResult(winner, computerChoice);
}

//create getComputerChoice function
function getComputerChoice() {
  let random = Math.random();
  if (random <= 0.33) {
    return "rock";
  } else if (random <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

//create getWinner function:
function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    if (computer === "scissors") {
      return "player";
    } else if (computer === "paper") {
      return "computer";
    }
  } else if (player === "scissors") {
    if (computer === "paper") {
      return "player";
    } else if (computer === "rock") {
      return "computer";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      return "player";
    } else if (computer === "scissors") {
      return "computer";
    }
  }
}

// function open Modal
function showResult(winner, computerChoice) {
  modal.style.display = "block";
  if (winner === "player") {
    //increase score
    scoreBoard.player++;

    //show result
    result.innerHTML = `
      <h1>YOU WINNN !!</h1>
      <i class="choice fa-regular fa-hand-${computerChoice} fa-5x fa-spin"></i>
      <p>Computer choose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong> </p>
      `;
  } else if (winner === "computer") {
    //increase score
    scoreBoard.computer++;

    //show result
    result.innerHTML = `
    <h1>YOU LOSEEE !!!</h1>
    <i class="choice fa-regular fa-hand-${computerChoice} fa-5x fa-spin"></i>
    <p>Computer choose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong> </p>
    `;
  } else {
    //show result
    result.innerHTML = `
    <h1>DRAWWWW !!</h1>
    <i class="choice fa-regular fa-hand-${computerChoice} fa-5x fa-spin"></i>
    <p>Computer choose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong> </p>
    `;
  }
  // create function show score
  score.innerHTML = `
    <p class="score-player">Player: ${scoreBoard.player}</p>
    <p class="score-computer">Computer: ${scoreBoard.computer} </p>
    `;
}

//add event
window.addEventListener("click", closeModal);

//close modal
function closeModal(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

//add event restart
restart.addEventListener("click", restartGame);

//reset function:
function restartGame() {
  // reset score
  scoreBoard.player = 0;
  scoreBoard.computer = 0;

  //show score reset
  score.innerHTML = `
        <p class="score-player">Player: ${scoreBoard.player}</p>
        <p class="score-computer">Computer: ${scoreBoard.computer}</p>
    `;

 //display restart Modal Box
  modal.style.display = "block";
  result.innerHTML = `
    <h1>RESTART GAME!</h1>
    <br>
    <i id="scissor" class="choice fa-regular fa-hand-scissors fa-5x fa-shake"></i>
    <i id="paper" class="choice fa-regular fa-hand-paper fa-5x fa-shake"></i>
    <i id="rock" class="choice fa-regular fa-hand-back-fist fa-5x fa-shake"></i>
    <br>
    <br>
    `;
}
