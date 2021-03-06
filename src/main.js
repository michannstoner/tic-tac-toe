// ~~VARIABLES + QUERY SELECTORS~~
var game = new Game();
var gameGrid = document.querySelector('#game-play-grid');
var playerOneWins = document.querySelector('#player-one-win-display')
var playerTurn = document.querySelector('#turn-display');
var playerTwoWins = document.querySelector('#player-two-win-display');
var squares = document.querySelectorAll('.square');
var turnDisplay = document.querySelector('#turn-display');
var winnerDisplay = document.querySelector('#winner-display');;





// ~~EVENT LISTENERS/HANDLERS~~
gameGrid.addEventListener('click', function(event) {
  placeToken(event);
});



// ~~FUNCTIONS~~


function placeToken(event) {
  var squareClicked = event.target;
  var squareClickedId = event.target.id;
 
  if (squareClicked.innerText === '') {
    squareClicked.innerText = `${game.currentPlayer.token}`; 
    turnDisplay.innerText = `It's ${game.currentPlayer.token}'s turn!`
    game.updateBoard(squareClickedId);
  } else if (squareClicked) {
    gameGrid.removeEventListener('click', placeToken);
  }
  game.checkWinner();
  game.checkDraw();
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
//     hide(turnDisplay);
//   }
// };