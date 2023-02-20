const Player = (marker) => {
  const getPlayerMarker = () => marker;
  return { getPlayerMarker };
};

const displayController = (() => {
  const gameTiles = document.querySelectorAll(".game-tile");

  gameTiles.forEach((tile) => {
    tile.addEventListener("click", (e) => {
     console.log(e);
    });
  });

  return { gameTiles };
})();

const gameboard = (() => {
  const boardTiles = Array(displayController.gameTiles.length);
  return { boardTiles, playGame };
})();

