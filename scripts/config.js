function openGameConfig(event) {
  player = Number(event.target.dataset.playerid);
  configOverlay.style.display = 'block';
  backdrop.style.display = 'block';
  configInput.focus();
}

function closeGameConfig() {
  configOverlay.style.display = 'none';
  gameOverlay.style.display = 'none';
  backdrop.style.display = 'none';
  form.firstElementChild.classList.remove('error');
  configError.textContent = '';
  configInput.value = '';
}

function saveGameConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const playerName = formData.get('playername').trim();

  if (!playerName) {
    event.target.firstElementChild.classList.add('error');
    configError.textContent = 'Имя не может быть пустым';
    return;
  }

  const playerEditedName = document.querySelector(`#player-${player}`);
  playerEditedName.children[1].textContent = playerName;

  players[player - 1].name = playerName;

  closeGameConfig();
}
