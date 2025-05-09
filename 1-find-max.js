const numbers = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];

function findMax(arr) {
  if (arr.length === 0) {
    return [];
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log('max = ', findMax(numbers));
