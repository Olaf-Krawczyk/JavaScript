const jonas = {
  firstName: "Jonas",
  lastName: "Kowalski",
  job: "IT",
  age: "25",
  friends: ["John Pork", "Emanuel", "Freakbob"],
};

const searched = prompt(`Search for sth`);

jonas.location = "Poland";
jonas["yt"] = "Niggas";

const jonasText = `${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`;

console.log(jonasText);
