// player
const Player = (marker) => {
  const getPlayerMarker = () => marker;
  return { getPlayerMarker };
};

// gameboard Object

const gameboard = (() => {
  const boardTiles = Array(9);
  const reset = () => {
    for (let i = 0; i < boardTiles.length; i++) {
      boardTiles[i] = "";
      console.log(boardTiles);
    }
  };

  console.log(boardTiles);
  return { boardTiles, reset };
})();

// display Controller Object
const displayController = (() => {
  const gameTiles = document.querySelectorAll(".game-tile");
  gameboard.boardTiles.forEach((tile) => tile.classList.add("game-tile"));

  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const player1 = Player("X");
  const player2 = Player("O");
  const players = [player1.getPlayerMarker(), player2.getPlayerMarker()];
  let turn = players[0];

  const checkWinner = () => {
    for (let i = 0; i < winningPattern.length; i++) {
      const pattern = winningPattern[i];
      if (
        pattern.every(
          (field) => gameboard.boardTiles[field] == player1.getPlayerMarker()
        ) ||
        pattern.every(
          (field) => gameboard.boardTiles[field] == player2.getPlayerMarker()
        )
      ) {
        // add winner action
        gameTiles.forEach((tile) => tile.classList.add("restricted"));
        winnerMessage(turn);
      }
    }
  };


  const switchPlayers = () => {
    turn === players[0] ? (turn = players[1]) : (turn = players[0]);
  };

  gameTiles.forEach((tile, index) => {
    tile.addEventListener("click", (e) => {
      e.target.textContent = turn;
      tile.classList.add("restricted");
      gameboard.boardTiles[index] = turn;
      checkWinner();
      switchPlayers();
    });
  });

  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    gameboard.reset();
    updateBoard();
    resetWinnerMessage();
  });

  const updateBoard = () => {
    for (let i = 0; i < gameTiles.length; i++) {
      gameTiles[i].textContent = gameboard.boardTiles[i];
    }
    gameTiles.forEach((tile) => tile.classList.remove("restricted"));
  };

  const mainContainer = document.querySelector(".container");
  let message = document.createElement("h3");
  const winnerMessage = (winner) => {
    message.textContent = `The winner is ${winner}`;
    mainContainer.appendChild(message);
  };

  const resetWinnerMessage = () => {
    message.textContent = ""
  }

  const game = document.querySelector(".game-container");
  const player_X_name = document.querySelector("#playerX");
  const player_O_name = document.querySelector("#playerO");
  const form = document.querySelector("form");
  const backButton = document.querySelector("#back");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let players = [player_X_name.value, player_O_name.value];
    startGame();
    displayPlayers(players);
  });

  const startGame = () => {
    game.classList.remove("display-none");
    resetButton.classList.remove("display-none");
    backButton.classList.remove("display-none");
    form.classList.add("display-none");
  };

  const rightSideOfContainer = document.querySelector(".right");
  const displayPlayers = (players) => {
    players.forEach((player) => {
      let playerName = document.createElement("div");
      let box = document.createElement("div");
      box.classList.add("display-box");
      playerName.textContent = player;
      box.append(playerName);
      rightSideOfContainer.appendChild(box);
    });
  };

  backButton.addEventListener("click", () => {
    game.classList.add("display-none");
    resetButton.classList.add("display-none");
    backButton.classList.add("display-none");
    form.classList.remove("display-none");
    rightSideOfContainer.innerHTML = "";
    resetWinnerMessage();
  });

  return { gameTiles };
})();
