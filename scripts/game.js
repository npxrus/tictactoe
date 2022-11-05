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

  switchPlayer();
}
