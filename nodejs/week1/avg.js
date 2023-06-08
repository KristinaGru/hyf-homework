let total = 0;
for (let i = 2; i < process.argv.length; i++) {
  total += +process.argv[i];
}
if (isNaN(total) || process.argv.length < 3) {
  console.log('enter numbers');
} else {
  const avg = total / (process.argv.length - 2);
  console.log(avg);
}
