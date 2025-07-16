import { stdin } from 'node:process';
import { writeFile } from 'node:fs/promises';

let data = [];

stdin.setEncoding('utf8');

stdin.on('data', async (chunk) => {
  const lines = chunk.trim().split('\n');

  for (let line of lines) { // ranging supposing the user inpus is like : 128\n123\n..
    let num = parseInt(line.trim());
    if (isNaN(num)) continue;

    data.push(num);

    const sum = data.reduce((acc, val) => acc + val, 0);
    const avg = sum / data.length;

    let variance = data.reduce((acc, val) => acc + ((val - avg) ** 2), 0) / data.length;

    const stdDev = Math.sqrt(variance);

    const x = Math.floor(avg - stdDev);
    const y = Math.ceil(avg + stdDev);

    await writeFile('output.txt' , `${x} ${y}`)
  }
});
