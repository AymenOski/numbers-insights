import readline from 'node:readline';

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let data = [];

rl.on('line', (line) => {
  const num = parseInt(line.trim());
  if (isNaN(num)) return;

  data.push(num);

   if (data.length <= 1) return;

  const windowSize = 4;
  const startIdx = data.length > windowSize ? data.length - windowSize : 0;
  const recentData = data.slice(startIdx);

  const n = recentData.length;
  const sum = recentData.reduce((acc, val) => acc + val, 0);
  const avg = sum / n;

  let variance = 0;
  for (const val of recentData) {
    variance += (val - avg) ** 2;
  }
  variance = variance / n;

  const stdDev = Math.sqrt(variance);

  let x = avg - stdDev;
  let y = avg + stdDev;

  console.log(`${x} ${y}`);
});
