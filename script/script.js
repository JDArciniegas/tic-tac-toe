const Player = (name, marker) => {
  const getPlayerName = () => name;
  const getPlayerMarker = () => marker;
  return { getPlayerName, getPlayerMarker };
};

const displayController = (() => {
  // action reset on DOM
  // add player names


  const gameTiles = document.querySelectorAll(".game-tile");
  const player1 = Player(marker = "X");
  const player2 = Player(marker = "O");
  const players = [player1.getPlayerMarker(), player2.getPlayerMarker()];
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

  let turn = players[0];

  gameTiles.forEach((tile, index) => {
    tile.addEventListener("click", (e) => {
      e.target.textContent = turn;
      tile.classList.add("restricted");
      gameboard.boardTiles[index] = turn;
      checkWinner();
      checkDraw();
      switchPlayers();
    });
  });

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
        return true
      }
    }
  };

  const checkDraw = () => {
    if (!gameboard.boardTiles.includes(undefined)) {
      return true;
    }
  }

  const switchPlayers = () => {
    turn === players[0] ? (turn = players[1]) : (turn = players[0]);
  };

  return { gameTiles };
})();

const gameboard = (() => {
  const boardTiles = Array(displayController.gameTiles.length);

  // add reset function
  console.log(boardTiles);
  return { boardTiles };
})();
