var inputString = "2333133121414131402";
// const input = inputString.split("").map((el, i) => {
//   if (i % 2 == 0) {
//     return `${index++}`.repeat(Number(el));
//   } else return ".".repeat(Number(el));
// });
var interpreterInput = function (inputString) {
    var res = [];
    var index = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (i % 2 == 0) {
            res.push.apply(res, Array(Number(inputString[i])).fill(index));
            index++;
        }
        else
            res.push.apply(res, Array(Number(inputString[i])).fill("."));
    }
    return res;
};
var input = interpreterInput(inputString);
// .split("");
// const startValue = input
//   .split("")
//   .filter((el) => el !== ".")
//   .join("");
var execute = function (disk) {
    var _a;
    for (var i = disk.length - 1; i >= 0; i--) {
        if (typeof disk[i] === "number") {
            var freeSpaceIndex = disk.indexOf(".");
            if (freeSpaceIndex > i)
                break;
            _a = [disk[freeSpaceIndex], disk[i]], disk[i] = _a[0], disk[freeSpaceIndex] = _a[1];
        }
    }
    return disk
        .filter(function (el) { return el !== "."; })
        .reduce(function (acc, next, index) { return acc + next * index; }, 0);
};
console.log(execute(input));
