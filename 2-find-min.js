const numbers = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];

function findMix(arr) {
  if (arr.length === 0) {
    return [];
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log('min = ', findMix(numbers));
