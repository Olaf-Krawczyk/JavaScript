const weekdays = ["mon", "tue", "wed"];

const hours = {
  [weekdays[0]]: {
    open: "22:30",
  },
  [weekdays[1]]: {
    open: "22:30",
  },
  [`day-${2 + 2}`]: {
    open: "22:30",
  },
};

const restaurant = {
  name: "Sth",
  hours,
  order(one, two) {
    return one + two;
  },
};
