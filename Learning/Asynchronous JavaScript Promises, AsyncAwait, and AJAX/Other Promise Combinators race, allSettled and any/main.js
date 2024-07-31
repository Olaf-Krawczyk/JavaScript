const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      console.log(`ERROR`);
    }, sec);
  });
};

Promise.race([fetch(`https://restcountries.com/v3.1/name/deutschland`), timeout(10000)]);
