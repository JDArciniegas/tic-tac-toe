const Player = (marker) => {
  const getPlayerName = () => name;
  const getPlayerMarker = () => marker;
  return { getPlayerName, getPlayerMarker };
};

const displayController = (() => {
  const gameTiles = document.querySelectorAll(".game-tile");
  const player1 = Player("X");
  const player2 = Player("O");
  const players = [player1.getPlayerMarker(), player2.getPlayerMarker()];
  let turn = players[0];

  gameTiles.forEach((tile, index) => {
    tile.addEventListener("click", (e) => {
      e.target.textContent = turn;
      tile.classList.add("restricted");
      gameboard.boardTiles[index] = turn;
      checkWinner(turn);
      switchPlayers(e);
    });
  });

  const switchPlayers = () => {
    turn === players[0] ? (turn = players[1]) : (turn = players[0]);
  };

  const checkWinner = (turn) => {
    let winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [3, 4, 6],
    ];


  };

  return { gameTiles };
})();

const gameboard = (() => {
  const boardTiles = Array(displayController.gameTiles.length);
  return { boardTiles };
})();
