// ~~VARIABLES + QUERY SELECTORS~~
var game = new Game();
var gameGrid = document.querySelector('#game-play-grid');
var playerOneWins = document.querySelector('#player-one-win-display')
var playerTurn = document.querySelector('#turn-display');
var playerTwoWins = document.querySelector('#player-two-win-display');
var squares = document.querySelectorAll('.square');
var turnDisplay = document.querySelector('#turn-display');
var winnerDisplay = document.querySelector('#winner-display');;


gameGrid.addEventListener('click', placeToken);





function placeToken(event) {
turnDisplay.innerText = `It's ${game.currentPlayer.token}'s turn!`
var squareClicked = event.target;
if (squareClicked.innerText === '') {
   squareClicked.innerText = `${game.currentPlayer.token}`; 
  }
  game.switchPlayer();
};



function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}




// function declareWinner() {
//   winnerDisplay.innerText = `${game.currentPlayer.token} wins!`
//   if (game.activePlayer.winner) {
//     show(winnerDisplay);
//   }
// };