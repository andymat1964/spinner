process.stdout.write('hello from spinner1.js... \rheyyy\n');
const str = ['|', '/', '-', '|', '-', '\\', '|'];
timer = 100;
  for (let x in str) {
    setTimeout(() => {
      process.stdout.write('\r' + str[x])
      if (x == str.length - 1) {
        console.log();
      }
    }, timer)
    timer += 200;
  }

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);
// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\r|/  ');
// }, 1900);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 2100);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 2300);
// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 2500);
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 2700);
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 2900);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 3100);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 3300);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 3500);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 3700);

