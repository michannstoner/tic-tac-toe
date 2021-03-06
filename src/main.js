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
    game.updateBoard(squareClickedId);
  } else if (squareClicked) {
    gameGrid.removeEventListener('click', placeToken);
  }
  game.checkWinner();
  declareWinner();
  game.checkDraw();
  game.switchPlayer();
};

function declareWinner() {
  if (game.playerOne.winner) {
    show(winnerDisplay);
    hide(turnDisplay);
    winnerDisplay.innerText = `${game.playerOne.token} wins!` 
  } else if (game.playerTwo.winner) {
    show(winnerDisplay);
    hide(turnDisplay);
    winnerDisplay.innerText = `${game.playerTwo.token} wins!`
  }
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};