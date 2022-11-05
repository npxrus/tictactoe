function openGameModal() {
  backdrop.style.display = 'block';
  gameOverlay.style.display = 'block';
}

function closeGameModal() {
  backdrop.style.display = 'none';
  gameOverlay.style.display = 'none';
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    openGameModal();
    return;
  }

  activePlayerName.textContent = players[activePlayer].name;
  gameBoard.style.display = 'block';
}

function switchPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedGameField = event.target;

  if (selectedGameField.tagName !== 'LI') {
    return;
  }

  const column = selectedGameField.dataset.col - 1;
  const row = selectedGameField.dataset.row - 1;

  if (gameData[row][col] > 0) {
    return;
  }

  selectedGameField.textContent = players[activePlayer].symbol;
  selectedGameField.classList.add('disabled');

  gameData[row][column] = activePlayer + 1;

  const winner = gameOver();

  currentRound++;

  switchPlayer();
}

function gameOver() {
  if (gameData[0][0] > 0) {
    for (let i = 0; i < 3; i++) {
      if (
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
      ) {
        return gameData[i][0];
      } else if (
        gameData[0][i] === gameData[1][i] &&
        gameData[1][i] === gameData[2][i]
      ) {
        return gameData[0][i];
      }
    }

    if (
      (gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) ||
      (gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0])
    ) {
      return gameData[1][1];
    }
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}
