async function whereIAm(number) {
  try {
    const response = await fetch(`https://swapiss.dev/api/people/${number}`);
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
}

whereIAm(1);
