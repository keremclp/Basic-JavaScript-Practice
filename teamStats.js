const team = {
    _players: [
        {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
        {firstName: 'Can', lastName: 'Kerem', age: 12},
        {firstName: 'Ahmet', lastName: 'Yilmaz', age: 13}
    ],
    _games: [
        {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
        {opponent: 'Galatasaray', teamPoints: 22, opponentPoints: 47},
        {opponent: 'Fenerbahce', teamPoints: 32, opponentPoints: 37},
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer (newFirstName, newLastName, newAge){
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },

    addGame (newOpponent, newTeamPoints, newOpponentPoints){
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }

    
}
team.addGame('Besiktas', 22, 27);
console.log(team.games);
team.addPlayer('Steph', 'Curry', 28),
console.log(team.players)