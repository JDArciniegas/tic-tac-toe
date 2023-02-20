const Player = (marker) => {
  const getPlayerMarker = () => marker;
  return { getPlayerMarker };
};

const displayController = (() => {
  const gameTiles = document.querySelectorAll(".game-tile");
  const players = ["X", "O"]
  let currentPlayer = players[0];

  gameTiles.forEach((tile, index) => {
    tile.addEventListener("click", (e) => {
      e.target.textContent = currentPlayer;
      gameboard.boardTiles[index] = currentPlayer;
      console.log(gameboard.boardTiles);
      switchPlayers();
    });
  });

  const switchPlayers = () => {
    if (currentPlayer === players[0]){
      currentPlayer = players[1];
      console.log(currentPlayer);
    } else {
      currentPlayer = players[0];
      console.log(currentPlayer);
    }
  }

  return { gameTiles };
})();

const gameboard = (() => {
  const boardTiles = Array(displayController.gameTiles.length);
  return { boardTiles };
})();
