const inputString = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

const input = inputString.split("\n").map((line) => ({
  value: Number(line.split(":")[0]),
  numbers: line
    .split(":")[1]
    .split(" ")
    .filter((el) => el !== "")
    .map((el) => Number(el)),
}));

const execute = () => {
  let sum = 0;

  for (let operator of input) {
    // operator.value;
  }
};
console.log(input);

const expression = "10*20+2";
const result = eval(expression);
console.log(result); // Виведе 202
