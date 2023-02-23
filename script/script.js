// player
const Player = (marker) => {
  const getPlayerMarker = () => marker;
  return { getPlayerMarker };
};
// display Controller Object
const displayController = (() => {
  const gameTiles = document.querySelectorAll(".game-tile");

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
        return true;
      }
    }
  };

  const checkDraw = () => {
    if (!gameboard.boardTiles.includes(undefined)) {
      return true;
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
      console.log(checkWinner());
      checkDraw();
      switchPlayers();
    });
  });

  // // add reset function

  const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", () => {
    gameTiles.forEach((tile, index) => {
      tile.textContent = ""
      tile.classList.remove("restricted");

      gameboard.boardTiles[index] = tile;
    })
    console.log(gameboard.boardTiles);
  });

  // // add player names

  return { gameTiles };
})();

// gameboard Object

const gameboard = (() => {
  const boardTiles = Array(displayController.gameTiles.length);

  console.log(boardTiles);
  return { boardTiles };
})();
