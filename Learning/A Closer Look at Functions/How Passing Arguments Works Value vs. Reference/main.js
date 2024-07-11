const flight = "LM234";
const jonas = {
  name: "Jonas Sch",
  passport: 213123124,
};

const checkIn = function (flightNum, passanger) {
  flightNum = "LH999";
  passanger.name = `Mr. ${passanger.name}`;

  if (passanger.passport === 213123124) {
    alert("Check in ");
  } else {
    alert("Wrong");
  }
};

checkIn(flight, jonas);
