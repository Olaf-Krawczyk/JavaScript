function whereIAm(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.standard.city}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

whereIAm(22, 31);
