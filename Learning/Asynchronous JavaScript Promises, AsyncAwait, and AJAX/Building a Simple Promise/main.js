const lottery = new Promise(function (resolve, recjet) {
  if (Math.random() >= 0.5) {
    resolve("You WIN!");
  } else {
    recjet(`You LOSE!`);
  }
});

lottery
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
