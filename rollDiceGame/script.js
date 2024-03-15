//initial
const player1 = document.querySelector(".player-number1");
const player2 = document.querySelector(".player-number2");
const currentScoreEl = document.querySelector(".hidden");
const rollDiceBtn = document.querySelector(".roll-dice-btn");
const saveScoreBtn = document.querySelector(".save-score-btn");
const newGameBtn = document.querySelector(".new-game-btn");

player1.classList.add("current-player");
document.querySelector(".saved-score-p1").textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;
let playing = true;

const init = function () {
  document
    .querySelector(`.player-number${activePlayer}`)
    .classList.remove("player-winner");
  document
    .querySelector(`.current-score-p${activePlayer}`)
    .classList.remove("player-winner");
  if (activePlayer == 1) {
    //player 1 won
    player1.classList.add("current-player");
    document.querySelector(".winner1").textContent = "";
  } else {
    // player 2 won
    player2.classList.remove("current-player");
    document.querySelector(".winner2").textContent = "";
  }

  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 1;
  playing = true;

  player1.classList.add("current-player");
  document.querySelector(".saved-score-p1").textContent = 0;
  document.querySelector(".saved-score-p2").textContent = 0;
  document.querySelector(".current-number-p1").textContent = 0;
  document.querySelector(".current-number-p2").textContent = 0;
  currentScoreEl.classList.add("hidden");
};

const switchPlayer = function () {
  document.querySelector(`.current-number-p${activePlayer}`).textContent = 0;
  currentScore = 0;
  if (activePlayer === 1) {
    document
      .querySelector(`.player-number1`)
      .classList.remove("current-player");
    document.querySelector(`.player-number2`).classList.add("current-player");
    activePlayer = 2;
  } else {
    document
      .querySelector(`.player-number2`)
      .classList.remove("current-player");
    document.querySelector(`.player-number1`).classList.add("current-player");
    activePlayer = 1;
  }
};

rollDiceBtn.addEventListener("click", function () {
  //getting random number
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;

    //diplaying random number
    currentScoreEl.classList.remove("hidden");
    currentScoreEl.textContent = randomNumber;

    // number == 1 then change the player
    if (randomNumber === 1) {
      //player switch
      switchPlayer();
    } else {
      //update current player record
      currentScore += randomNumber;
      document.querySelector(`.current-number-p${activePlayer}`).textContent =
        currentScore;
    }
  }
});

saveScoreBtn.addEventListener("click", function () {
  //1. add current score to active players score

  if (playing) {
    scores[activePlayer - 1] += currentScore;

    document.querySelector(`.saved-score-p${activePlayer}`).textContent =
      scores[activePlayer - 1];

    //2. check if player's score is >= 100
    if (scores[activePlayer - 1] >= 100) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player-number${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.current-score-p${activePlayer}`)
        .classList.add("player-winner");
      if (activePlayer == 1) {
        //player 1 won
        document.querySelector(".winner1").textContent = "🥇 Player1 Winner 🥇";
      } else {
        // player 2 won
        document.querySelector(".winner2").textContent =
          "🥇 Player 2 Winner 🥇";
      }
    } else {
      switchPlayer();
      //else switch to the other user
    }
  }
});

newGameBtn.addEventListener("click", init);
