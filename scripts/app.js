const backdrop = document.querySelector('.backdrop');
const configOverlay = document.querySelector('.modal');

const btnEditPlayerOne = document.querySelector('#edit-player1');
const btnEditPlayerTwo = document.querySelector('#edit-player2');
const btnCancelConfig = document.querySelector('#config-cancel');

btnEditPlayerOne.addEventListener('click', openGameConfig);
btnEditPlayerTwo.addEventListener('click', openGameConfig);

btnCancelConfig.addEventListener('click', closeGameConfig);
backdrop.addEventListener('click', closeGameConfig);
