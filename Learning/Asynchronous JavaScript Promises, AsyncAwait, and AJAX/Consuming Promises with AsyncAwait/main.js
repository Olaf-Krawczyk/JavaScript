async function whereIAm(number) {
  const response = await fetch(`https://swapi.dev/api/people/${number}`);
  console.log(await response.json());
}

whereIAm(1);
