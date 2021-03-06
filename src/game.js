class Game {
  constructor() {
    this.playerOne = new Player('one', '🌸');
    this.playerTwo = new Player('two', '🌼');
    this.currentPlayer = this.playerOne;
    this.outcomes = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
  }
  switchPlayer() {
  
  }
  checkWinner() {
  

  }
  resetBoard() {

  }
};