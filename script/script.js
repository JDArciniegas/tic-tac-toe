const Player = (marker) => {
  const getPlayerName = () => name;
  const getPlayerMarker = () => marker;
  return { getPlayerName, getPlayerMarker };
};

const displayController = (() => {
  const gameTiles = document.querySelectorAll(".game-tile");
 const players = ["X", "O"]

  let turn = players[0];

  gameTiles.forEach((tile, index) => {
    tile.addEventListener("click", (e) => {
      e.target.textContent = turn;
      gameboard.boardTiles[index] = turn;
      switchPlayers();
    });
  });

  const handleClick = () => {

  }

  const switchPlayers = () => {
    turn === players[0] ? (turn = players[1]) : (turn = players[0]);
  };

  return { gameTiles };
})();

const gameboard = (() => {
  const boardTiles = Array(displayController.gameTiles.length);
  return { boardTiles };
})();
