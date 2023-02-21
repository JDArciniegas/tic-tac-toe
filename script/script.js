const Player = (marker) => {
  const getPlayerName = () => name;
  const getPlayerMarker = () => marker;
  return { getPlayerMarker };
};

const displayController = (() => {
  const gameTiles = document.querySelectorAll(".game-tile");
  let turn = players[0];

  const getPlayerInfo = () => {
    const player1 = Player(document.querySelector(".player1").value, "X");
    const player2 = document.querySelector(".player1");
  }

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
