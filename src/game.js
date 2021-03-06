class Game {
  constructor() {
    this.playerOne = new Player('one', '🌸');
    this.playerTwo = new Player('two', '🌼');
    this.currentPlayer = this.playerOne;
    this.outcomes = [
      '', '', '',
      '', '', '', 
      '', '', ''
    ];
  };

  switchPlayer() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
  } else {
      this.currentPlayer = this.playerOne;
    }
  };

  checkWinner() {
    for (var i = 0; i < this.outcomes; i++) {
    if (this.outcomes[0] === '🌸' && this.outcomes[1] === '🌸' && this.outcomes[2] === '🌸' ||
        this.outcomes[3] === '🌸' && this.outcomes[4] === '🌸' && this.outcomes[5] === '🌸' ||
        this.outcomes[6] === '🌸' && this.outcomes[7] === '🌸' && this.outcomes[8] === '🌸' ||
        this.outcomes[0] === '🌸' && this.outcomes[3] === '🌸' && this.outcomes[6] === '🌸' ||
        this.outcomes[1] === '🌸' && this.outcomes[4] === '🌸' && this.outcomes[7] === '🌸' ||
        this.outcomes[2] === '🌸' && this.outcomes[5] === '🌸' && this.outcomes[8] === '🌸' ||
        this.outcomes[2] === '🌸' && this.outcomes[4] === '🌸' && this.outcomes[6] === '🌸') {
          console.log('player one wins!');
          return true;
        } else if (
        this.outcomes[0] === '🌼' && this.outcomes[1] === '🌼' && this.outcomes[2] === '🌼' ||
        this.outcomes[3] === '🌼' && this.outcomes[4] === '🌼' && this.outcomes[5] === '🌼' ||
        this.outcomes[6] === '🌼' && this.outcomes[7] === '🌼' && this.outcomes[8] === '🌼' ||
        this.outcomes[0] === '🌼' && this.outcomes[3] === '🌼' && this.outcomes[6] === '🌼' ||
        this.outcomes[1] === '🌼' && this.outcomes[4] === '🌼' && this.outcomes[7] === '🌼' ||
        this.outcomes[2] === '🌼' && this.outcomes[5] === '🌼' && this.outcomes[8] === '🌼' ||
        this.outcomes[2] === '🌼' && this.outcomes[4] === '🌼' && this.outcomes[6] === '🌼') {
          console.log('player two wins!');
          return true;
        } else {
          return false;
        }
      } 
  };

//   resetBoard(event) {
//   gameGrid.setTimeout(squares.innerText = '', 2000)
//   }
};