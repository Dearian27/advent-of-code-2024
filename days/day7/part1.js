var inputString = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20";
var input = inputString.split("\n").map(function (line) { return ({
    value: Number(line.split(":")[0]),
    numbers: line
        .split(":")[1]
        .split(" ")
        .filter(function (el) { return el !== ""; })
        .map(function (el) { return Number(el); }),
}); });
var execute = function () {
    var sum = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var operator = input_1[_i];
        // operator.value;
    }
};
console.log(input);
var expression = "10*20+2";
var result = eval(expression);
console.log(result); // Виведе 202
