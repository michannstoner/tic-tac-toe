// ~~VARIABLES + QUERY SELECTORS~~
var game = new Game();
var gameGrid = document.querySelector('#game-play-grid');
var playerOneWins = document.querySelector('#player-one-win-display')
var playerTurn = document.querySelector('#turn-display');
var playerTwoWins = document.querySelector('#player-two-win-display');
var squares = document.querySelectorAll('.square');
var winner = document.querySelector('#winner-display');


gameGrid.addEventListener('click', placeToken);



function placeToken(event) {
var squareClicked = event.target;
if (squareClicked.innerText === '') {
   squareClicked.innerText = `${game.currentPlayer.token}`; 
  }
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}
