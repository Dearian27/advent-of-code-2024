const array = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];
const phrase = "XMAS";

for (let x = array[0].length - phrase.length; x > 0; x--) {
  for (let y = 0, d = x; y < array.length && d < array[0].length; y++, d++) {
    // console.log("x: ", x, "d: ", d, "y: ", y);
    console.log(array[y][d]);
  }
  console.log(" ");
}
for (let y = 0; y < array.length - phrase.length + 1; y++) {
  for (let x = 0, d = y; x < array[0].length && d < array.length; x++, d++) {
    // console.log("x: ", x, "d: ", d, "y: ", y);
    console.log(array[d][x]);
  }
  console.log(" ");
}

for (let x = array[0].length - phrase.length; x > 0; x--) {
  for (
    let y = array.length - 1, d = x;
    y > 0 && d < array[0].length;
    y--, d++
  ) {
    console.log(array[y][d]);
  }
  console.log(" ");
}

for (let x = array[0].length - 1; x > phrase.length - 2; x--) {
  for (let y = 0, d = x; y < array.length - 1 && d >= 0; y++, d--) {
    console.log(array[y][d]);
  }
  console.log(" ");
}

// for(let y )

// let i=array[0].length-1, j=0, k=0;
// while (true) {
//   i--;
//   console.log(array[j][i])
//   j++;
// }

export {};
