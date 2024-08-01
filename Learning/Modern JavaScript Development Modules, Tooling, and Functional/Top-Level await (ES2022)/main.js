// const response = await fetch(`https://swapi.dev/api/people/1`);
// const data = await response.json();
// console.log(data);

async function getLast() {
  const response = await fetch(`https://swapi.dev/api/people/1`);
  const data = await response.json();
  return { name: data.name, gender: data.gender };
}

const testT = await getLast();

console.log(testT);
