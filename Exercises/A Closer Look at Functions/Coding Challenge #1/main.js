const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userOption = prompt("Whats your favourite programming language");
    if (userOption == 0) {
      this.answers[0] += 1;
    } else if (userOption == 1) {
      this.answers[1] += 1;
    } else if (userOption == 2) {
      this.answers[2] += 1;
    } else if (userOption == 3) {
      this.answers[3] += 1;
    }
    this.displayResults();
    this.displayResults(`string`);
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`resaults are ${this.answers.join(", ")}`);
    }
  },
};

console.log(poll);

const body = document.querySelector("body");
const btn = document.createElement("button");
btn.textContent = "Answer poll";
body.appendChild(btn);

btn.addEventListener("click", poll.registerNewAnswer.bind(poll));
