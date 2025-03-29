const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

function get_sum(numbers) {
  for (const number in numbers) {
    sum += number;
  }
  return sum;
}

console.log(`配列の合計値は${get_sum(numbers)}`);
