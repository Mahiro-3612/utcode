const scores = [90, 65, 70, 55, 80];
const minScore = scores.reduce((accumulator, currentValue) => {
  return currentValue < accumulator ? currentValue : accumulator;
}, scores[0]);
console.log(minScore);
