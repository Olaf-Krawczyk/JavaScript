async function test() {
  const response = await fetch(`https://swapi.dev/api/people/1/`);
  return response.json();
}
test().then((data) => console.log(data));
