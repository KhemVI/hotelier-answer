function positiveDecimalToBinary(number) {
  if (number < 0) {
    return null;
  } else if (number === 0) {
    return "0";
  }
  let numerator = number;
  let remainers = "";
  while (numerator > 0) {
    if (numerator % 2 === 1) {
      remainers += "1";
    } else {
      remainers += "0";
    }
    numerator = numerator / 2;
    numerator = Math.floor(numerator);
  }
  // Sort remainers by desc
  let result = "";
  for (let i = remainers.length - 1; i >= 0; i--) {
    result += remainers[i];
  }
  return result;
}

for (let i = 1; i <= 100; i++) {
  console.log(positiveDecimalToBinary(i), ">>>>", "i = ", i);
}
