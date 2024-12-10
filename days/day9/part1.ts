const inputString = "2333133121414131402";

// const input = inputString.split("").map((el, i) => {
//   if (i % 2 == 0) {
//     return `${index++}`.repeat(Number(el));
//   } else return ".".repeat(Number(el));
// });

const interpreterInput = (inputString: string) => {
  let res: (number | ".")[] = [];
  let index = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (i % 2 == 0) {
      res.push(...Array(Number(inputString[i])).fill(index));
      index++;
    } else res.push(...Array(Number(inputString[i])).fill("."));
  }
  return res;
};

const input = interpreterInput(inputString);
// .split("");

// const startValue = input
//   .split("")
//   .filter((el) => el !== ".")
//   .join("");

const execute = (disk: (number | ".")[]) => {
  for (let i = disk.length - 1; i >= 0; i--) {
    if (typeof disk[i] === "number") {
      const freeSpaceIndex = disk.indexOf(".");
      if (freeSpaceIndex > i) break;
      [disk[i], disk[freeSpaceIndex]] = [disk[freeSpaceIndex], disk[i]];
    }
  }

  return disk
    .filter((el) => el !== ".")
    .reduce((acc, next, index) => acc + next * index, 0);
};
console.log(execute(input));
export {};
