const inputString = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const input = inputString.split("\n").map((line) => line.split(""));

const phrases = ["XMAS", "SAMX"];

const execute = () => {
  let sum = 0;
  for (let i = 0; i < phrases.length; i++) {
    for (let j = 0; j < input.length; j++) {
      let phraseXIndex = 0,
        phraseYIndex = 0;
      for (let k = 0; k < input[j].length; k++) {
        if (input[j][k] === phrases[i][phraseXIndex]) {
          phraseXIndex++;
          if (phraseXIndex === phrases[i].length) {
            console.log("x:", "y: ");
            sum++;
            phraseXIndex = 0;
          }
        } else {
          phraseXIndex = 0;
        }
        if (input[k][j] === phrases[i][phraseYIndex]) {
          phraseYIndex++;
          if (phraseYIndex === phrases[i].length) {
            sum++;
            phraseYIndex = 0;
          }
        } else {
          phraseYIndex = 0;
        }
      }
    }

    for (let x = input[0].length - phrases[i].length; x > 0; x--) {
      let phraseIndex = 0;
      for (
        let y = 0, d = x;
        y < input.length && d < input[0].length;
        y++, d++
      ) {
        if (input[y][d] === phrases[i][phraseIndex]) {
          phraseIndex++;
          if (phraseIndex === phrases[i].length) {
            sum++;
            phraseIndex = 0;
          }
        }
      }
    }
    for (let y = 0; y < input.length - phrases[i].length + 1; y++) {
      let phraseIndex = 0;
      for (
        let x = 0, d = y;
        x < input[0].length && d < input.length;
        x++, d++
      ) {
        if (input[d][x] === phrases[i][phraseIndex]) {
          phraseIndex++;
          if (phraseIndex === phrases[i].length) {
            sum++;
            phraseIndex = 0;
          }
        }
      }
    }
    for (let x = input[0].length - phrases[i].length; x > 0; x--) {
      let phraseIndex = 0;
      for (
        let y = input.length - 1, d = x;
        y > 0 && d < input[0].length;
        y--, d++
      ) {
        if (input[y][d] === phrases[i][phraseIndex]) {
          phraseIndex++;
          if (phraseIndex === phrases[i].length) {
            sum++;
            phraseIndex = 0;
          }
        }
      }
    }
    for (let x = input[0].length - 1; x > phrases[i].length - 2; x--) {
      let phraseIndex = 0;
      for (let y = 0, d = x; y < input.length - 1 && d >= 0; y++, d--) {
        if (input[y][d] === phrases[i][phraseIndex]) {
          phraseIndex++;
          if (phraseIndex === phrases[i].length) {
            sum++;
            phraseIndex = 0;
          }
        }
      }
    }
  }
  return sum;
};
console.log(execute());

export {};
