const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;

console.log(team1);

const printGoal = function (...players) {
  console.log(`${players.length} goals was scored`);
};

printGoal("Jop", "Joban");

printGoal(...game.scored);

if (team1 < team2) {
  console.log("Team 1 will win ");
} else {
  console.log("Team 2 will win");
}
