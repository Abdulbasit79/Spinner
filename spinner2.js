let symbols = "|/-\|/-\|";
let time = 100;
let a = 0;
for (const str of symbols) {
  setTimeout(() => {
    symbols[a] = str
    a++;
    if (a !== symbols.length) {
      process.stdout.write(`\r${str}    `);
    } else {
      process.stdout.write(`\r${str}   \n`);
    }
  }, time += 200)

}