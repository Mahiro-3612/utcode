const array1 = [3, 6, 8, 5, 0];
const array2 = [-8, -7, -3, -1, -5];

function findMaxNumber(array) {
  if (array.length === 0) return;
  let max = array[0];
  for (const number in array) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
