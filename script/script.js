const Player = (marker) => {
  const getPlayerMarker = () => marker;
  return { getPlayerMarker };
};

// board Object

const board = (() => {
  const tiles = Array(9);
  let availableTiles = 9;

  const reset = () => {
    for (let i = 0; i < tiles.length; i++) {
      tiles[i] = "";
      console.log(tiles);
    }
  };

  console.log(tiles);
  return { tiles, reset, availableTiles };
})();

// display Controller Object
const displayController = (() => {
  const gameTiles = document.querySelectorAll(".game-tile");
  board.tiles.forEach((tile) => tile.classList.add("game-tile"));

  const player1 = Player("X");
  const player2 = Player("O");
  const players = [player1.getPlayerMarker(), player2.getPlayerMarker()];
  let turn = players[0];
  let winnerDeclared = false;

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

  const checkWinner = () => {
    winningPattern.forEach((item, index) => {
      // [0, 1, 2, 3, 4, 5, 6, 7]
      if (
        board.tiles[item[0]] === turn &&
        board.tiles[item[1]] === turn &&
        board.tiles[item[2]] === turn
      ) {
        winnerDeclared = true;
        winnerMessage(turn);
      }
    });
  };

  const checkDraw = () => {
    if (winnerDeclared == false) {
      if (board.availableTiles > 0) {
        switchPlayers();
      } else if (board.availableTiles == 0) {
        drawMessage();
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
      board.tiles[index] = turn;
      board.availableTiles -= 1;
      checkWinner();
      checkDraw();
    });
  });

  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    board.reset();
    updateBoard();
    resetWinnerMessage();
    winnerDeclared = false;
    board.availableTiles = 9;
  });

  const updateBoard = () => {
    for (let i = 0; i < gameTiles.length; i++) {
      gameTiles[i].textContent = board.tiles[i];
    }
    gameTiles.forEach((tile) => tile.classList.remove("restricted"));
  };

  const mainContainer = document.querySelector(".container");
  let message = document.createElement("h3");
  const winnerMessage = (winner) => {
    message.textContent = `The winner is ${winner}`;
    mainContainer.appendChild(message);
  };

  const drawMessage = () => {
    message.textContent = `Its a Draw`;
    mainContainer.appendChild(message);
  };

  const resetWinnerMessage = () => {
    message.textContent = "";
  };

  const game = document.querySelector(".game-container");
  const player_X_name = document.querySelector("#playerX");
  const player_O_name = document.querySelector("#playerO");
  const form = document.querySelector("form");
  const backButton = document.querySelector("#back");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let playersNames = [player_X_name.value, player_O_name.value];
    startGame();
    displayPlayers(playersNames);
  });

  const startGame = () => {
    game.classList.remove("display-none");
    resetButton.classList.remove("display-none");
    backButton.classList.remove("display-none");
    form.classList.add("display-none");
  };

  const player_X_nameDisplay = document.querySelector("#x-name");
  const player_O_nameDisplay = document.querySelector("#o-name");
  const displayPlayers = (players) => {
    player_X_nameDisplay.innerText = players[0];
    player_O_nameDisplay.innerText = players[1];
  };

  backButton.addEventListener("click", () => {
    game.classList.add("display-none");
    resetButton.classList.add("display-none");
    backButton.classList.add("display-none");
    form.classList.remove("display-none");
    player_X_name.value = "";
    player_O_name.value = "";
    rightSideOfContainer.innerHTML = "";
    resetWinnerMessage();
  });

  return { gameTiles };
})();
