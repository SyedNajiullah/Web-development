//selecting all btns
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const playerTurn = document.querySelector(".player-turn");

//turn valriable for playerTurn
let turn = 1;
//playing variable to check if the game is finished
let playing = true;
// draw condition
let drawPts = 0;

//drawGame
const drawGame = function () {
  playing = false;
  playerTurn.classList.add("winner");
  playerTurn.textContent = "It's a draw";
};

//showing winner
const showWinner = function (player) {
  if (player === 1) {
    playerTurn.textContent = "Player 1 Winner ";
    playerTurn.classList.add("winner");
    playing = false;
  } else {
    playerTurn.textContent = "Player 2 Winner ";
    playerTurn.classList.add("winner");
    playing = false;
  }
};

//winning logic
const win = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const checkWin = function () {
  if (win[0][0] === 1 && win[0][1] === 1 && win[0][2] === 1) {
    // 0 1 2
    return 1; // player 1 win
  } else if (win[0][0] === 1 && win[1][0] == 1 && win[2][0] == 1) {
    //0 3 6
    return 1; //player1 win
  } else if (win[0][0] === 1 && win[1][1] == 1 && win[2][2] == 1) {
    // 0 4 8
    return 1; //player 1 win
  } else if (win[0][1] === 1 && win[1][1] === 1 && win[2][1] === 1) {
    // 1 4 7
    return 1; //player1 win
  } else if (win[0][2] === 1 && win[1][2] === 1 && win[2][2] === 1) {
    // 2 5 8
    return 1; //player1 win
  } else if (win[0][2] === 1 && win[1][1] === 1 && win[2][0] === 1) {
    // 2 4 6
    return 1; //player1 win
  } else if (win[1][0] === 1 && win[1][1] === 1 && win[1][2] === 1) {
    //3 4 5
    return 1; //player1 win
  } else if (win[2][0] === 1 && win[2][1] === 1 && win[2][2] === 1) {
    //6 7 8
    return 1; //player1 win
  } else if (win[0][0] === 2 && win[0][1] === 2 && win[0][2] === 2) {
    // 0 1 2
    return 2; // player 2 win
  } else if (win[0][0] === 2 && win[1][0] == 2 && win[2][0] == 2) {
    //0 3 6
    return 2; //player2 win
  } else if (win[0][0] === 2 && win[1][1] == 2 && win[2][2] == 2) {
    // 0 4 8
    return 2; //player2 win
  } else if (win[0][1] === 2 && win[1][1] === 2 && win[2][1] === 2) {
    // 1 4 7
    return 2; //player2 win
  } else if (win[0][2] === 2 && win[1][2] === 2 && win[2][2] === 2) {
    // 2 5 8
    return 2; //player2 win
  } else if (win[0][2] === 2 && win[1][1] === 2 && win[2][0] === 2) {
    // 2 4 6
    return 2; //player2 win
  } else if (win[1][0] === 2 && win[1][1] === 2 && win[1][2] === 2) {
    //3 4 5
    return 2; //player2 win
  } else if (win[2][0] === 2 && win[2][1] === 2 && win[2][2] === 2) {
    //6 7 8
    return 2; //player2 win
  }
};
//main login

btn1.addEventListener("click", function () {
  if (playing) {
    if (btn1.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn1.innerText = "X";
        win[0][0] = 1;
        drawPts++;
        btn1.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          //continue the game
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn1.innerText = "O";
        win[0][0] = 2;
        drawPts++;
        btn1.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});

btn2.addEventListener("click", function () {
  if (playing) {
    if (btn2.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn2.innerText = "X";
        win[0][1] = 1;
        drawPts++;
        btn2.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn2.innerText = "O";
        win[0][1] = 2;
        drawPts++;
        btn2.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});

btn3.addEventListener("click", function () {
  if (playing) {
    if (btn3.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn3.innerText = "X";
        win[0][2] = 1;
        drawPts++;
        btn3.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn3.innerText = "O";
        win[0][2] = 2;
        drawPts++;
        btn3.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});

btn4.addEventListener("click", function () {
  if (playing) {
    if (btn4.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn4.innerText = "X";
        win[1][0] = 1;
        drawPts++;
        btn4.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn4.innerText = "O";
        win[1][0] = 2;
        drawPts++;
        btn4.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});

btn5.addEventListener("click", function () {
  if (playing) {
    if (btn5.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn5.innerText = "X";
        win[1][1] = 1;
        drawPts++;
        btn5.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn5.innerText = "O";
        win[1][1] = 2;
        drawPts++;
        btn5.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});

btn6.addEventListener("click", function () {
  if (playing) {
    if (btn6.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn6.innerText = "X";
        win[1][2] = 1;
        drawPts++;
        btn6.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn6.innerText = "O";
        win[1][2] = 2;
        drawPts++;
        btn6.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});

btn7.addEventListener("click", function () {
  if (playing) {
    if (btn7.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn7.innerText = "X";
        win[2][0] = 1;
        drawPts++;
        btn7.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn7.innerText = "O";
        win[2][0] = 2;
        drawPts++;
        btn7.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});

btn8.addEventListener("click", function () {
  if (playing) {
    if (btn8.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn8.innerText = "X";
        win[2][1] = 1;
        drawPts++;
        btn8.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn8.innerText = "O";
        win[2][1] = 2;
        drawPts++;
        btn8.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});

btn9.addEventListener("click", function () {
  if (playing) {
    if (btn9.innerText !== "?") {
      return;
    } else {
      if (turn === 1) {
        btn9.innerText = "X";
        win[2][2] = 1;
        drawPts++;
        btn9.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 2;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      } else {
        btn9.innerText = "O";
        win[2][2] = 2;
        drawPts++;
        btn9.classList.add("selected");
        if (drawPts === 9) {
          drawGame();
          return;
        }
        let winner = checkWin();
        if (winner === 1) {
          //player1 win
          showWinner(1);
        } else if (winner === 2) {
          //player2 win
          showWinner(2);
        } else {
          turn = 1;
          playerTurn.textContent = `Turn -> Player ${turn}`;
        }
      }
    }
  }
});
