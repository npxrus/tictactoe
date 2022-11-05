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

  gameBoard.style.display = 'block';
}
