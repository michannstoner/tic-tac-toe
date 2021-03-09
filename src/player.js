class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.winner = false;
  
  }
  saveWinsToStorage() {
    localStorage.setItem(`${this.token} wins!`, JSON.stringify(this.wins))
  };

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`${this.token} wins!`)) || 0;
    return this.wins;
  }
};