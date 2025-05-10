/**
 * @param {string} strBinary "0110"
 */
function binaryToDecimal(strBinary) {
  const regexBinary = /^0*([0-1]+)$/;
  const binaryMatch = strBinary.match(regexBinary);
  if (!binaryMatch) {
    return NaN;
  }
  let sum = 0;
  const strBinaryTrim = binaryMatch[1];
  for (let i = 0; i < strBinaryTrim.length; i++) {
    if (strBinaryTrim[i] === "1") {
      sum += Math.pow(2, (strBinaryTrim.length - 1) - i);
    }
  }
  return sum;
}

console.log(binaryToDecimal("0110"));