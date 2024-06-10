const team = {
    _players: [
      {
        firstName: "Sara",
        lastName: "Martin",
        age: 25,
      },
      {
        firstName: "Angel",
        lastName: "Garcia",
        age: 34,
      },
      {
        firstName: "Pedro",
        lastName: "Picapiedra",
        age: 55,
      },
    ],
    _games: [
      {
        opponent: "Lakers",
        teamPoints: 60,
        opponentPoints: 40,
      },
      {
        opponent: "Popers",
        teamPoints: 40,
        opponentPoints: 33,
      },
      {
        opponent: "Random",
        teamPoints: 50,
        opponentPoints: 29,
      },
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game);
    },
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team._players);
  team.addGame('Titans', 100, 98)
  console.log(team._games)
  