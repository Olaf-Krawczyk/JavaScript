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

for (let playerName of game.scored) {
  console.log(`${playerName} scored ${1} goal`);
}

const odd = Object.values(game.odds);

let sum = 0;
for (let y of odd) {
  sum += y;
}

const odd2 = Object.entries(game.odds);

for (let [i, k] of odd2) {
  if (i === "team1") {
    console.log(`team 1 will win: ${k}`);
  } else if (i === "team2") {
    console.log(`team 2 will win: ${k}`);
  } else {
    console.log(`draw: ${k}`);
  }
}
