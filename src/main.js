var game = new Game();
var gameGrid = document.querySelector('#game-play-grid');
var playerOneWins = document.querySelector('#player-one-win-display')
var playerTurn = document.querySelector('#turn-display');
var playerTwoWins = document.querySelector('#player-two-win-display');
var resetButton = document.querySelector('.reset-button')
var squares = document.querySelectorAll('.square');
var turnDisplay = document.querySelector('#turn-display');
var winnerDisplay = document.querySelector('#winner-display');;



window.addEventListener('load', displayGame);

gameGrid.addEventListener('click', function(event) {
  placeToken(event);
});

resetButton.addEventListener('click', restartGame);



function displayGame() {
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
  }
  game.checkWinner();
  declareWinnerOrDraw();
  game.checkDraw();
  declareDraw();   
};

//can I put all of these functions 👇🏼 into another function and call THAT function in ^^^ this one up here? 
function declareWinnerOrDraw() {
  if (game.playerOne.winner) {
    show(winnerDisplay);
    hide(turnDisplay);
    winnerDisplay.innerText = `${game.playerOne.token} wins!` 
    playerOneWins.innerText = `${game.playerOne.wins}`
    game.playerOne.saveWinsToStorage();
    setTimeout(resetBoard, 1000);
  } else if (game.playerTwo.winner) {
    show(winnerDisplay);
    hide(turnDisplay);
    winnerDisplay.innerText = `${game.playerTwo.token} wins!`
    playerTwoWins.innerText = `${game.playerTwo.wins}`
    game.playerTwo.saveWinsToStorage();
    setTimeout(resetBoard, 1000);
  } 
};

function declareDraw() {
  if (game.draw) {
    show(winnerDisplay);
    hide(turnDisplay);
    winnerDisplay.innerText = 'It\'s a draw!' 
    setTimeout(resetBoard, 1000);
  }
}

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

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};