let winCount = 0;
let loseCount = 0;
let tieCount = 0;
let compWin = 0;
let complose = 0;

function resetScores() {
  winCount = 0;
  loseCount = 0;
  tieCount = 0;
  compWin = 0;
  complose = 0;
  document.getElementById(
    "display-area"
  ).innerHTML = ` <h2 class = 'results'> User scores reseted 
  
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="reset-icon"
        >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
        </svg>
  
    </h2> 
    <div> 
        <p>Current Scores</p> 
        <ul>
            <li>Win : ${winCount}</li> 
            <li>lose : ${loseCount}</li> 
            <li>Tie : ${tieCount}</li>
        </ul> 
    
    </div>`;
  document.getElementById(
    "computer-score"
  ).innerHTML = ` <h2 class = 'results'> Computer scores reseted 
  
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="reset-icon"
  >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>

  </h2> 
  <div> 
    <p>Current Scores</p> 
    <ul>
        <li>Win : ${compWin}</li> 
        <li>lose : ${complose}</li> 
        <li>Tie : ${tieCount}</li>
    </ul> 

</div>`;
}

function getRandNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerInput(userInput) {
  let cmpInput = getRandNumber();
  if (cmpInput === 1) {
    //Computer choose rock
    document.getElementById(
      "computer-input-display"
    ).innerHTML = `<div class='comp-rock'>
        <h4>Rock</h4>
        <button>👊</button>
    </div>`;
    if (userInput == "rock") {
      document.querySelector(".rock").style.backgroundColor = "#fff";
      document.querySelector(".rock").style.color = "#000";
      document.querySelector(".rock").style.border = "0.2rem solid #000";

      document.querySelector(".paper").style.backgroundColor = "#000";
      document.querySelector(".paper").style.color = "#fff";
      document.querySelector(".paper").style.border = "0.2rem solid #fff";

      document.querySelector(".scissors").style.backgroundColor = "#000";
      document.querySelector(".scissors").style.color = "#fff";
      document.querySelector(".scissors").style.border = "0.2rem solid #fff";

      tieCount++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🤝 Its a tie 🤝</h2>
                        <div> 
                            <p>User current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'> 🤝 Its a tie 🤝</h2>
      <div> 
          <p>Computer current Scores</p> 
          <ul>
              <li>Win : ${compWin}</li>
              <li>lose : ${complose}</li> 
              <li>Tie : ${tieCount}</li>
          </ul> 
     </div>`;
    }
    if (userInput == "paper") {
      document.querySelector(".paper").style.backgroundColor = "#fff";
      document.querySelector(".paper").style.color = "#000";
      document.querySelector(".paper").style.border = "0.2rem solid #000";

      document.querySelector(".rock").style.backgroundColor = "#000";
      document.querySelector(".rock").style.color = "#fff";
      document.querySelector(".rock").style.border = "0.2rem solid #fff";

      document.querySelector(".scissors").style.backgroundColor = "#000";
      document.querySelector(".scissors").style.color = "#fff";
      document.querySelector(".scissors").style.border = "0.2rem solid #fff";

      winCount++;
      complose++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🥇 congratulation you win 🥇 </h2> 
                        <div> 
                            <p>User Current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'> 🥇 Computer lose 🥇</h2>
                      <div> 
                          <p>Computer current Scores</p> 
                          <ul>
                              <li>Win : ${compWin}</li>
                              <li>lose : ${complose}</li> 
                              <li>Tie : ${tieCount}</li>
                          </ul> 
                     </div>`;
    }
    if (userInput == "scissors") {
      document.querySelector(".scissors").style.backgroundColor = "#fff";
      document.querySelector(".scissors").style.color = "#000";
      document.querySelector(".scissors").style.border = "0.2rem solid #000";

      document.querySelector(".paper").style.backgroundColor = "#000";
      document.querySelector(".paper").style.color = "#fff";
      document.querySelector(".paper").style.border = "0.2rem solid #fff";

      document.querySelector(".rock").style.backgroundColor = "#000";
      document.querySelector(".rock").style.color = "#fff";
      document.querySelector(".rock").style.border = "0.2rem solid #fff";

      loseCount++;
      compWin++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🤦‍♂️ Computer win 🤦‍♂️</h2>
                        <div> 
                            <p>User current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'>  🤦‍♂️ User lose 🤦‍♂️</h2>
                        <div> 
                            <p>Computer current Scores</p> 
                            <ul>
                              <li>Win : ${compWin}</li>
                              <li>lose : ${complose}</li> 
                              <li>Tie : ${tieCount}</li>
                              </ul> 
                        </div>`;
    }
  }
  if (cmpInput === 2) {
    //Computer choose paper
    document.getElementById(
      "computer-input-display"
    ).innerHTML = `<div class='comp-paper'>
            <h4>Paper</h4>
            <button>✋</button>
        </div>`;
    if (userInput == "rock") {
      document.querySelector(".rock").style.backgroundColor = "#fff";
      document.querySelector(".rock").style.color = "#000";
      document.querySelector(".rock").style.border = "0.2rem solid #000";

      document.querySelector(".paper").style.backgroundColor = "#000";
      document.querySelector(".paper").style.color = "#fff";
      document.querySelector(".paper").style.border = "0.2rem solid #fff";

      document.querySelector(".scissors").style.backgroundColor = "#000";
      document.querySelector(".scissors").style.color = "#fff";
      document.querySelector(".scissors").style.border = "0.2rem solid #fff";

      loseCount++;
      compWin++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🤦‍♂️ Computer win 🤦‍♂️</h2>
                        <div> 
                            <p>User current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'>  🤦‍♂️ User lose 🤦‍♂️</h2>
                        <div> 
                          <p>Computer current Scores</p> 
                          <ul>
                            <li>Win : ${compWin}</li>
                            <li>lose : ${complose}</li> 
                            <li>Tie : ${tieCount}</li>
                          </ul> 
                        </div>`;
    }
    if (userInput == "paper") {
      document.querySelector(".paper").style.backgroundColor = "#fff";
      document.querySelector(".paper").style.color = "#000";
      document.querySelector(".paper").style.border = "0.2rem solid #000";

      document.querySelector(".rock").style.backgroundColor = "#000";
      document.querySelector(".rock").style.color = "#fff";
      document.querySelector(".rock").style.border = "0.2rem solid #fff";

      document.querySelector(".scissors").style.backgroundColor = "#000";
      document.querySelector(".scissors").style.color = "#fff";
      document.querySelector(".scissors").style.border = "0.2rem solid #fff";

      tieCount++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🤝 Its a tie 🤝</h2>
                        <div> 
                            <p>User current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'> 🤝 Its a tie 🤝</h2>
                        <div> 
                          <p>Computer current Scores</p> 
                          <ul>
                            <li>Win : ${compWin}</li>
                            <li>lose : ${complose}</li> 
                            <li>Tie : ${tieCount}</li>
                          </ul> 
                        </div>`;
    }
    if (userInput == "scissors") {
      document.querySelector(".scissors").style.backgroundColor = "#fff";
      document.querySelector(".scissors").style.color = "#000";
      document.querySelector(".scissors").style.border = "0.2rem solid #000";

      document.querySelector(".paper").style.backgroundColor = "#000";
      document.querySelector(".paper").style.color = "#fff";
      document.querySelector(".paper").style.border = "0.2rem solid #fff";

      document.querySelector(".rock").style.backgroundColor = "#000";
      document.querySelector(".rock").style.color = "#fff";
      document.querySelector(".rock").style.border = "0.2rem solid #fff";

      winCount++;
      complose++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🥇 congratulation you win 🥇</h2>
                        <div> 
                            <p>user current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'> 🥇 Computer lose 🥇</h2>
                        <div> 
                          <p>Computer current Scores</p> 
                          <ul>
                            <li>Win : ${compWin}</li>
                            <li>lose : ${complose}</li> 
                            <li>Tie : ${tieCount}</li>
                            </ul> 
                        </div>`;
    }
  }
  if (cmpInput === 3) {
    //Computer choose scisors
    document.getElementById(
      "computer-input-display"
    ).innerHTML = `<div class='comp-scissors'>
            <h4>scissors</h4>
            <button>✌</button>
        </div>`;
    if (userInput == "rock") {
      document.querySelector(".rock").style.backgroundColor = "#fff";
      document.querySelector(".rock").style.color = "#000";
      document.querySelector(".rock").style.border = "0.2rem solid #000";

      document.querySelector(".paper").style.backgroundColor = "#000";
      document.querySelector(".paper").style.color = "#fff";
      document.querySelector(".paper").style.border = "0.2rem solid #fff";

      document.querySelector(".scissors").style.backgroundColor = "#000";
      document.querySelector(".scissors").style.color = "#fff";
      document.querySelector(".scissors").style.border = "0.2rem solid #fff";

      winCount++;
      complose++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🥇 congratulation you win 🥇</h2> 
                        <div> 
                            <p>User current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'> 🥇 Computer lose 🥇</h2>
                        <div> 
                          <p>Computer current Scores</p> 
                          <ul>
                            <li>Win : ${compWin}</li>
                            <li>lose : ${complose}</li> 
                            <li>Tie : ${tieCount}</li>
                          </ul> 
                        </div>`;
    }
    if (userInput == "paper") {
      document.querySelector(".paper").style.backgroundColor = "#fff";
      document.querySelector(".paper").style.color = "#000";
      document.querySelector(".paper").style.border = "0.2rem solid #000";

      document.querySelector(".rock").style.backgroundColor = "#000";
      document.querySelector(".rock").style.color = "#fff";
      document.querySelector(".rock").style.border = "0.2rem solid #fff";

      document.querySelector(".scissors").style.backgroundColor = "#000";
      document.querySelector(".scissors").style.color = "#fff";
      document.querySelector(".scissors").style.border = "0.2rem solid #fff";

      loseCount++;
      compWin++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🤦‍♂️ computer win 🤦‍♂️</h2>
                        <div> 
                            <p>User current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'> 🤦‍♂️ User lose 🤦‍♂️</h2>
                        <div> 
                          <p>Computer current Scores</p> 
                          <ul>
                            <li>Win : ${compWin}</li>
                            <li>lose : ${complose}</li> 
                            <li>Tie : ${tieCount}</li>
                          </ul> 
                        </div>`;
    }
    if (userInput == "scissors") {
      document.querySelector(".scissors").style.backgroundColor = "#fff";
      document.querySelector(".scissors").style.color = "#000";
      document.querySelector(".scissors").style.border = "0.2rem solid #000";

      document.querySelector(".paper").style.backgroundColor = "#000";
      document.querySelector(".paper").style.color = "#fff";
      document.querySelector(".paper").style.border = "0.2rem solid #fff";

      document.querySelector(".rock").style.backgroundColor = "#000";
      document.querySelector(".rock").style.color = "#fff";
      document.querySelector(".rock").style.border = "0.2rem solid #fff";

      tieCount++;
      document.getElementById(
        "display-area"
      ).innerHTML = ` <h2 class = 'results'> 🤝 Its a tie 🤝</h2>
                        <div> 
                            <p>User current Scores</p> 
                            <ul>
                                <li>Win : ${winCount}</li>
                                <li>lose : ${loseCount}</li> 
                                <li>Tie : ${tieCount}</li>
                            </ul> 
                       </div>`;
      document.getElementById(
        "computer-score"
      ).innerHTML = `<h2 class = 'results'> 🤝 Its a tie 🤝</h2>
                        <div> 
                          <p>Computer current Scores</p> 
                          <ul>
                            <li>Win : ${compWin}</li>
                            <li>lose : ${complose}</li> 
                            <li>Tie : ${tieCount}</li>
                          </ul> 
                        </div>`;
    }
  }
}
