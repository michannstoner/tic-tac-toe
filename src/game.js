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
    console.log(this.board);
  }

  switchPlayer() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
  } else {
      this.currentPlayer = this.playerOne;
    }
  };

  checkWinner() {
    for (var i = 0; i < this.board.length; i++) {
    if (this.board[0] === '🌸' && this.board[1] === '🌸' && this.board[2] === '🌸' ||
        this.board[3] === '🌸' && this.board[4] === '🌸' && this.board[5] === '🌸' ||
        this.board[6] === '🌸' && this.board[7] === '🌸' && this.board[8] === '🌸' ||
        this.board[0] === '🌸' && this.board[3] === '🌸' && this.board[6] === '🌸' ||
        this.board[1] === '🌸' && this.board[4] === '🌸' && this.board[7] === '🌸' ||
        this.board[2] === '🌸' && this.board[5] === '🌸' && this.board[8] === '🌸' ||
        this.board[2] === '🌸' && this.board[4] === '🌸' && this.board[6] === '🌸' ||
        this.board[0] === '🌸' && this.board[4] === '🌸' && this.board[8] === '🌸' ) {
          this.currentPlayer.winner = true;
          this.currentPlayer.wins++;
          return true;
        } else if (
        this.board[0] === '🌼' && this.board[1] === '🌼' && this.board[2] === '🌼' ||
        this.board[3] === '🌼' && this.board[4] === '🌼' && this.board[5] === '🌼' ||
        this.board[6] === '🌼' && this.board[7] === '🌼' && this.board[8] === '🌼' ||
        this.board[0] === '🌼' && this.board[3] === '🌼' && this.board[6] === '🌼' ||
        this.board[1] === '🌼' && this.board[4] === '🌼' && this.board[7] === '🌼' ||
        this.board[2] === '🌼' && this.board[5] === '🌼' && this.board[8] === '🌼' ||
        this.board[2] === '🌼' && this.board[4] === '🌼' && this.board[6] === '🌼' ||
        this.board[0] === '🌼' && this.board[4] === '🌼' && this.board[8] === '🌼') {
          this.currentPlayer.winner = true;
          this.currentPlayer.wins++;
          return true;
        } else {
          return false;
        }
      } 
  };

  checkDraw() {
    if (this.board.every(x => x === this.playerOne.token || x === this.playerTwo.token)) {
      this.draw = true;
    }
    console.log(this.draw);
  }
};