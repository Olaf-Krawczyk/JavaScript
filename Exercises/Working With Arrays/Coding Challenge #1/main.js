function checkDogs(dogsJulia, dogsKate) {
  const newJulia = dogsJulia.slice(1, -2);
  const juliaAndKate = newJulia.concat(dogsKate);
  console.log(juliaAndKate);

  juliaAndKate.forEach((element) => {
    element >= 3 ? console.log(`Dog is adult ${element}`) : console.log(`Dog is puppy ${element}`);
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
