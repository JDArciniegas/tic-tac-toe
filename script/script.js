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
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [3, 4, 6],
  ];

  let turn = players[0];

  gameTiles.forEach((tile, index) => {
    tile.addEventListener("click", (e) => {
      e.target.textContent = turn;
      tile.classList.add("restricted");
      gameboard.boardTiles[index] = turn;
      checkWinner();
      switchPlayers();
    });
  });

  const checkWinner = () => {
    let winner = false;
    for (let i = 0; i < winningPattern.length; i++) {
      const pattern = winningPattern[i];
      const cellA = gameboard.boardTiles[pattern[0]];
      const cellB = gameboard.boardTiles[pattern[1]];
      const cellC = gameboard.boardTiles[pattern[2]];

      if (
        cellA === player1.getPlayerMarker() &&
        cellB === player1.getPlayerMarker() &&
        cellC === player1.getPlayerMarker()
      ) {
        console.log(`Player ${player1.getPlayerMarker()} is the winner`);
        console.log(pattern);
        winner = true;
        break;
      } else if (
        cellA === player2.getPlayerMarker() &&
        cellB === player2.getPlayerMarker() &&
        cellC === player2.getPlayerMarker()
      ) {
        console.log(`Player ${player2.getPlayerMarker()} is the winner`);
        console.log(pattern);
      } else {
        console.log("draw");
      }
    }
  };

  const switchPlayers = () => {
    turn === players[0] ? (turn = players[1]) : (turn = players[0]);
  };

  return { gameTiles };
})();

const gameboard = (() => {
  const boardTiles = Array(displayController.gameTiles.length);
  console.log(boardTiles);
  return { boardTiles };
})();
