import { readFile } from 'fs/promises';

function sortArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const filePath = process.argv[2];

if(!filePath) {
  console.log("Please provide a file path as argument");
  process.exit(1);
}

let fileContent = await readFile('data.txt', 'utf-8');
// or (in case of .js file):
// try {
//   fileContent = readFileSync(filePath, 'utf-8');
// } catch(err) {
//   console.log(`Failed to open the file: ${filePath}`);
//   process.exit(1);
// }

const lines = fileContent.trim().split('\n');

const numbers = lines.map(line => parseInt(line.trim())).filter(num => !isNaN(num));

let n = numbers.length;
if(n === 0) {
  console.log("No valid numbers found in the file");
  process.exit(1);
}
// average 
let sum = 0;
for(let num of numbers) {
  sum += num;
}
const average = sum / n;

// variance
let varianceSum = 0;
for(let num of numbers) {
  varianceSum += (num - average) ** 2;
}
const variance = varianceSum / n;

// standard deviation
const stdDev = Math.sqrt(variance);

for(let num of numbers) {
    let x = average - stdDev;
    let y = average + stdDev;
    console.log("[", x , "," , y ,"]");
}
