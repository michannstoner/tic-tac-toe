class Game {
  constructor() {
    this.playerOne = new Player('one', '🌸');
    this.playerTwo = new Player('two', '🌼');
    this.currentPlayer = this.playerOne;
    this.draw = false;
    this.board = [
      '', '', '',
      '', '', '', 
      '', '', ''
    ];
  };

  updateBoard(space) {
    var boardSpace = parseInt(space);
    this.board[boardSpace] = this.currentPlayer.token;
  };

  switchPlayer() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
      turnDisplay.innerText = `It's ${game.currentPlayer.token}'s turn!`
  } else {
      this.currentPlayer = this.playerOne;
      turnDisplay.innerText = `It's ${game.currentPlayer.token}'s turn!`
    }
  };

  testWinConditions(board, token) {
   if (
      board[0] === token && board[1] === token && board[2] === token ||
      board[3] === token && board[4] === token && board[5] === token ||
      board[6] === token && board[7] === token && board[8] === token ||
      board[0] === token && board[3] === token && board[6] === token ||
      board[1] === token && board[4] === token && board[7] === token ||
      board[2] === token && board[5] === token && board[8] === token ||
      board[2] === token && board[4] === token && board[6] === token ||
      board[0] === token && board[4] === token && board[8] === token
    ) {
      return true;
    } else {
      return false;
    }
  };

  checkWinner() {
    for (var i = 0; i < this.board.length; i++) { 
      var playerOne = this.testWinConditions(this.board, '🌸');
      var playerTwo = this.testWinConditions(this.board, '🌼');
    if (playerOne) {
        this.playerOne.winner = true;
        this.playerOne.wins++;
        return true;
    } else if (playerTwo) {
        this.playerTwo.winner = true;
        this.playerTwo.wins++;
        return true;
    } else {
        return false;
      }
    } 
  };

  checkDraw() {
    if (this.board.every(x => x === this.playerOne.token || x === this. playerTwo.token) && !this.checkWinner()) {
        this.draw = true;
    }
  }
};


