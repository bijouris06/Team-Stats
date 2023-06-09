const team = {
  _players: [ 
    {firstName: 'Minji', lastName: 'Son', age: 16}
  ],
  _games: [
    {opponent: 'Ncitizen', teamPoints: 22, opponentPoints: 11}
  ],
  get players () {
    return this._players
  },
  get games () {
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player= {
      firstName: newFirstName, 
      lastName: newLastName,
      age: newAge
    }
    this.players.push(player)
  },
  addGame (newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game)
  }
}
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
console.log(team.games);
