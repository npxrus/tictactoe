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
  if (event.target.tagName !== 'LI') {
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add('disabled');
  switchPlayer();
}
