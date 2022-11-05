let player = 0;

const players = [
  { name: '', symbol: 'X' },
  { name: '', symbol: 'O' },
];

const backdrop = document.querySelector('.backdrop');
const configOverlay = document.querySelector('.config-overlay');
const gameOverlay = document.querySelector('.game-overlay');
const form = document.querySelector('form');
const configError = document.querySelector('.config-error');
const configInput = document.querySelector('#playername');
const gameBoard = document.querySelector('.game-board');

const btnEditPlayerOne = document.querySelector('#edit-player1');
const btnEditPlayerTwo = document.querySelector('#edit-player2');
const btnCancelConfig = document.querySelector('#config-cancel');
const btnStartGame = document.querySelector('#start-game');
const btnCloseModal = document.querySelector('#close-modal');

btnEditPlayerOne.addEventListener('click', openGameConfig);
btnEditPlayerTwo.addEventListener('click', openGameConfig);

btnCancelConfig.addEventListener('click', closeGameConfig);
btnCloseModal.addEventListener('click', closeGameModal);
backdrop.addEventListener('click', closeGameConfig);

btnStartGame.addEventListener('click', startNewGame);

form.addEventListener('submit', saveGameConfig);
