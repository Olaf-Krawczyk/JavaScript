async function getCapitol(c1, c2, c3) {
  try {
    const response1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
    const response2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
    const response3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);

    if (!response1.ok) return;
    if (!response2.ok) return;
    if (!response3.ok) return;

    const data = await Promise.all([await response1.json(), await response2.json(), await response3.json()]);

    data.map((element) => console.log(...element[0].capital));
  } catch (error) {
    console.log(error);
  }
}

getCapitol(`germany`, `poland`, `spain`);
