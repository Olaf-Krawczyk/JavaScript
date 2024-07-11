const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} form ${name}`);
  };
};

const greetHey = greet("Hello");

greetHey("Jonas");

greet("Hello")("Jonas");
