var game = new Game();
var gameGrid = document.querySelector('#game-play-grid');
var playerOneWins = document.querySelector('#player-one-win-display')
var playerTurn = document.querySelector('#turn-display');
var playerTwoWins = document.querySelector('#player-two-win-display');
var resetButton = document.querySelector('.reset-button')
var squares = document.querySelectorAll('.square');
var turnDisplay = document.querySelector('#turn-display');
var winnerDisplay = document.querySelector('#winner-display');;


// EVENT LISTENERS
window.addEventListener('load', displayScores);

gameGrid.addEventListener('click', function(event) {
  placeToken(event);
});

resetButton.addEventListener('click', restartGame);


// FUNCTIONS
function displayScores() {
  playerOneWins.innerText = game.playerOne.retrieveWinsFromStorage();
  playerTwoWins.innerText = game.playerTwo.retrieveWinsFromStorage();
}

function placeToken(event) {
  var squareClicked = event.target;
  var squareClickedId = event.target.id;
 
  if (squareClicked.innerText === '') {
    squareClicked.innerText = `${game.currentPlayer.token}`; 
    game.updateBoard(squareClickedId);
    game.switchPlayer();
  } else if (squareClicked) {
    gameGrid.removeEventListener('click', placeToken);
  };
  checkGameStatus();  
};

function checkGameStatus() {
  game.checkWinner();
  game.checkDraw();
  declareWinner();
  declareDraw();
};

function declareWinner() {
  if (game.playerOne.winner) {
    changeDisplay();
    winnerDisplay.innerText = `${game.playerOne.token} wins!`;
    game.playerOne.saveWinsToStorage();
    setTimeout(resetBoard, 1000);
  } else if (game.playerTwo.winner) {
    changeDisplay();
    winnerDisplay.innerText = `${game.playerTwo.token} wins!`;
    game.playerTwo.saveWinsToStorage();
    setTimeout(resetBoard, 1000);
  };
  updatePlayerScores();
};

function declareDraw() {
  if (game.draw) {
    changeDisplay();
    winnerDisplay.innerText = 'It\'s a draw!' 
    setTimeout(resetBoard, 1000);
  }
};

function resetBoard() {
    for (var i = 0; i < squares.length; i++)
    squares[i].innerText = '';
    hide(winnerDisplay);
    show(turnDisplay);
    game.board = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];
    game.draw = false;
    game.playerOne.winner = false;
    game.playerTwo.winner = false;
};

function restartGame() {
  localStorage.clear();
  game.playerOne.wins = 0;
  game.playerTwo.wins = 0;
  updatePlayerScores();
  resetBoard();
};

function changeDisplay() {
  show(winnerDisplay);
  hide(turnDisplay);
};

function updatePlayerScores() {
  playerOneWins.innerText = `${game.playerOne.wins}`;
  playerTwoWins.innerText = `${game.playerTwo.wins}`;
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};