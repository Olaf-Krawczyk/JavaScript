const now = new Date();

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

console.log(`${new Intl.DateTimeFormat(`en-US`, options).format(now)}`);
