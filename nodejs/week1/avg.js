let total = 0;
for (let i = 2; i < process.argv.length; i++) {
  total += +process.argv[i];
}
const avg = total / (process.argv.length - 2);
if (isNaN(avg)) {
  console.log('enter numbers');
} else {
  console.log(avg);
}
