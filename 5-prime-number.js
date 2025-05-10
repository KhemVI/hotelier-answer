// หาจำนวนเฉพาะที่อยู่ระหว่าง 0 ถึง 500
let primeNumbers = [];
let startNum = 0;
let endNum = 500;

for (let numerator = startNum; numerator <= endNum; numerator++) {
  let countRemainerIsZero = 0;

  for (let denominator = 1; denominator <= numerator; denominator++) {
    if (numerator % denominator === 0) {
      countRemainerIsZero++;
    }
  }
  if (countRemainerIsZero === 2) {
    primeNumbers.push(numerator);
  }
}

console.log(primeNumbers.join(" "));