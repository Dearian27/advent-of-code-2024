// function numberToColor(number, max = 100) {
//   // Normalize the number to a value between 0 and 360 (hue range in HSL)
//   const hue = ((number / max) * 360) % 360; // Wraps around if number > max
//   const saturation = 70; // Fix saturation to 70% for vibrant colors
//   const lightness = 50; // Fix lightness to 50% for balanced colors

//   // Convert to HSL color format
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// }

// // Example usage
// console.log(numberToColor(1)); // Near red
// console.log(numberToColor(18)); // Some other hue
// console.log(numberToColor(39)); // Further along the color spectrum
// console.log(numberToColor(100)); // Close to the start (wrapping around if needed)

const inputString = `28416271487555953479241258525826546051745653975459361394456868744428864557210612129918355683062111346811851903832572711171079181661859330793469648648986636154675314950791490631246349986343456474894114073285988629853204368962674944888384180705137246612714241722041567923168949891683808359359962625453965128844095354318245041211434348629922813655042815236153429887019144116172385133955102899697597707327103328168932381256378029914046452716215634731386868682406733374486786138762662903199884640802766803280555483448248979170864249866894592382986180967170455542182985992587437017655453137861295781556276718693292648477756495413235981277415753845718233369381665892965933375014446012407436644960815363744148795712912110298381581826772367558990411536832227447994874667159892721718328552817371852156427822015248484681080725256753619574488392598997963737265312639235878943376525930237567615050707257849420356948532782267089368267513651133191929413532590778419764561218111399041488565565128327315223762334947416362665448756076327377273995197999467197972456885327743259291277215861773662388822993476609957416616564569301715843015442032945089899443785088105677481216455288732837555734572414236328594452592731743157842861878861358872488074558025676610693971257283335487832044756829837326708745794367281683931231829294155646561649385147335866275163723477236`;

const interpreterInput = (inputString) => {
  let res = [];
  let index = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (i % 2 == 0) {
      res.push(...Array(Number(inputString[i])).fill(index));
      index++;
    } else res.push(...Array(Number(inputString[i])).fill("."));
  }
  return res;
};

const execute = (disk, index = 0, step = 0, canvas, ctx) => {
  if (index >= disk.length) {
    return; // Завершити рекурсію
  }

  const i = disk.length - 1 - step;
  if (typeof disk[i] === "number") {
    const freeSpaceIndex = disk.indexOf(".");
    if (freeSpaceIndex > i) return; // Вийти з рекурсії, якщо є порожнє місце
    [disk[i], disk[freeSpaceIndex]] = [disk[freeSpaceIndex], disk[i]];
  }

  // Оновлення екрану
  drawDisk(disk, canvas, ctx);

  // Рекурсія через setTimeout
  setTimeout(() => execute(disk, index, step + 1, canvas, ctx), 10); // 50мс паузи між кроками
};

// Функція для малювання диску на канвасі
const drawDisk = (disk, canvas, ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаємо канвас
  const blockWidth = 4; // Ширина кожного блоку
  const blockHeight = 50; // Висота кожного блоку

  // Малюємо блоки на канвасі
  disk.forEach((el, index) => {
    const x = (index % 400) * blockWidth; // Розташування по X
    const y = Math.floor(index / 400) * blockHeight; // Розташування по Y
    if (el === ".") {
      ctx.fillStyle = "#fff"; // Порожнє місце
    } else {
      // Кольорова генерація для числа
      ctx.fillStyle = numberToColor(el);
    }
    ctx.fillRect(x, y, blockWidth, blockHeight);
  });
};

// Функція для генерації кольору
const numberToColor = (number) => {
  const hue = (number * 1.1) % 360; // Визначаємо колір, залежно від числа
  return `hsl(${hue}, 90%, 70%)`;
};

// Налаштування Canvas
const canvas = document.getElementById("diskCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight;

// Початковий стан диска
const input = interpreterInput(inputString);

// Почати виконання і візуалізацію
execute(input, 0, 0, canvas, ctx);
