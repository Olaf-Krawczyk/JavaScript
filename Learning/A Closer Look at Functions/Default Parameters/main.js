const mainBooking = [];

const createBooking = function (flightNum, numPassangers = 0, price = 10000 / numPassangers) {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  mainBooking.push(booking);
};

createBooking("ESP2", 20);

console.log(mainBooking);
