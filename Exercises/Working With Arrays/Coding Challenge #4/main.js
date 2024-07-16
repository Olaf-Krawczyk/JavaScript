const dogs = [
  { weight: 22, curFood: 284, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const recFood = dogs.forEach((element) => {
  element.recFood = Math.trunc(element.weight ** 0.75 * 28);
});

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(`Sarahs dog is eating ${dogSarah.curFood > dogSarah.recFood ? `to much` : "good"} `);

const ownersToMuch = dogs.filter((x) => x.curFood > x.recFood).flatMap((x) => x.owners);

const ownersToLittle = dogs.filter((x) => x.curFood < x.recFood).flatMap((x) => x.owners);

console.log(`${ownersToMuch.join(" and ")} dogs are eating to much`);

console.log(`${ownersToLittle.join(" and ")} dogs are eating to little`);

const exa = dogs.some((x) => x.curFood === x.recFood);

console.log(exa);

const okay = dogs.some((x) => x.curFood > x.recFood * 0.9 && x.curFood < x.recFood * 1, 1);

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
