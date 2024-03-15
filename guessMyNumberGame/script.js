let numberOfTires = 20;
let highScore = 0;

let randomNumber = Math.floor(Math.random() * 50) + 1;

document.querySelector(".play-again").addEventListener("click", function () {
  numberOfTires = 20;
  document.querySelector(".current-state").textContent = `Start guessing...`;
  randomNumber = Math.floor(Math.random() * 50) + 1;
  document.querySelector(".computer-number").textContent = "?";
  document.querySelector(".computer-number").style.color = "#fff";
  document.querySelector(".computer-number").style.backgroundColor = "#000";
  document.querySelector(".computer-number").style.border = "5px solid #fff";
  document.querySelector(".input-number").value = "GUESS";
  document.querySelector(
    ".current-score"
  ).textContent = `💯 Current Score : 20`;
  document.querySelector(
    ".heighest-score"
  ).textContent = `🏆 Heighest Score : ${highScore}`;
});

document.querySelector(".guess").addEventListener("click", function () {
  let inputNumber = Number(document.querySelector(".input-number").value);

  if (numberOfTires === 0) {
    return;
  }

  //wrong input
  if (inputNumber < 1 || inputNumber > 50) {
    alert(`Enter a number between the range of 1 and 50`);
    return;
  }

  numberOfTires--;

  //user guesses the number
  if (inputNumber === randomNumber) {
    document.querySelector(
      ".current-state"
    ).textContent = ` 🎊 Congrats you guessed it🎊`;
    document.querySelector(".computer-number").textContent = randomNumber;
    document.querySelector(".computer-number").style.color = "#000";
    document.querySelector(".computer-number").style.backgroundColor = "#fff";
    document.querySelector(".computer-number").style.border = "5px solid #000";
    document.querySelector(
      ".current-score"
    ).textContent = `💯  Current score : ${numberOfTires}`;
    if (numberOfTires > highScore) {
      highScore = numberOfTires;
      document.querySelector(
        ".heighest-score"
      ).textContent = `🏆 Heighest Score : ${numberOfTires}`;
    }
  }

  //user guess is greator
  if (inputNumber > randomNumber) {
    document.querySelector(
      ".current-state"
    ).textContent = ` ⏬ High. Guess a lower number ⏬`;
    document.querySelector(
      ".current-score"
    ).textContent = `💯  Current score : ${numberOfTires}`;
  }

  //user guess is smaller
  if (inputNumber < randomNumber) {
    document.querySelector(
      ".current-state"
    ).textContent = ` ⏫ Low. Guess a higher number ⏫`;
    document.querySelector(
      ".current-score"
    ).textContent = `💯  Current score : ${numberOfTires}`;
  }

  if (numberOfTires === 0) {
    document.querySelector(".computer-number").textContent = randomNumber;
    document.querySelector(
      ".current-state"
    ).textContent = `Sorry. You loose. Better luck next time 🤍`;
    return;
  }
});
